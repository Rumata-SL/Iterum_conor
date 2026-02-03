import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./app/styles/index.scss";
import {App} from "app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import {ErrorBoundary} from "app/providers/ErroreBoundary";
import {StoreProvider} from "app/providers/StoreProvider";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
);