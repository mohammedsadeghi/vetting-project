import * as React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ROUTES_TO_RETAIN = ["/"];
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();
  const retainedComponents = React.useRef<any>({});

  const isRetainableRoute = ROUTES_TO_RETAIN.includes(router.asPath);

  // Add Component to retainedComponents if we haven't got it already
  if (isRetainableRoute && !retainedComponents.current[router.asPath]) {
    const MemoComponent = React.memo(Component);
    retainedComponents.current[router.asPath] = {
      component: <MemoComponent {...pageProps} />,
      scrollPos: 0,
    };
  }

  // Save the scroll position of current page before leaving
  const handleRouteChangeStart = (url: String) => {
    if (isRetainableRoute) {
      retainedComponents.current[router.asPath].scrollPos = window.scrollY;
    }
  };

  // Save scroll position - requires an up-to-date router.asPath
  React.useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.asPath]);

  // Scroll to the saved position when we load a retained component
  React.useEffect(() => {
    if (isRetainableRoute) {
      window.scrollTo(0, retainedComponents.current[router.asPath].scrollPos);
    }
  }, [Component, pageProps]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline */}
        <CssBaseline />
        <div>
          <div style={{ display: isRetainableRoute ? "block" : "none" }}>
            {Object.entries(retainedComponents.current).map(
              ([path, c]: any[]) => (
                <div
                  key={path}
                  style={{ display: router.asPath === path ? "block" : "none" }}
                >
                  {c.component}
                </div>
              )
            )}
          </div>
          {!isRetainableRoute && <Component {...pageProps} />}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
