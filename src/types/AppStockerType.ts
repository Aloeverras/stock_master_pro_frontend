import { FooterStockerType } from "./FooterStockerType"
import { HeaderStcokerType } from "./HeaderStcokerType"
import { MainStockerType } from "./MainStockerType"

export type AppStockerType = {
    header : HeaderStcokerType,
    main : MainStockerType,
    footer : FooterStockerType
}