const initialState = {
    deals: [] as Array<DealType>
}

export const dealsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "dealsReducer/SET_DEALS":
            return {...state, deals: action.data}
        default:
            return state
    }

}

type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof setDeals>

export const setDeals = (data: Array<DealType>) => ({type: "dealsReducer/SET_DEALS", data} as const)

type DealType = {
    ADDITIONAL_INFO: string | null
    ASSIGNED_BY_ID: string
    BEGINDATE: string
    CATEGORY_ID: string
    CLOSED: string
    CLOSEDATE: string
    COMMENTS: string
    COMPANY_ID: string
    CONTACT_ID: string | null
    CREATED_BY_ID: string
    CURRENCY_ID: string
    DATE_CREATE: string
    DATE_MODIFY: string
    ID: string
    IS_MANUAL_OPPORTUNITY: string
    IS_NEW: string
    IS_RECURRING: string
    IS_REPEATED_APPROACH: string
    IS_RETURN_CUSTOMER: string
    LEAD_ID: string | null
    LOCATION_ID: string | null
    MODIFY_BY_ID: string
    OPENED: string
    OPPORTUNITY: string
    ORIGINATOR_ID: string | null
    ORIGIN_ID: string| null
    PROBABILITY: string | null
    QUOTE_ID: string | null
    SOURCE_DESCRIPTION: string
    SOURCE_ID: string
    STAGE_ID: string
    STAGE_SEMANTIC_ID: string
    TAX_VALUE: string
    TITLE: string
    TYPE_ID: string
    UTM_CAMPAIGN: string | null
    UTM_CONTENT: string | null
    UTM_MEDIUM: string | null
    UTM_SOURCE: string | null
    UTM_TERM: string | null
}