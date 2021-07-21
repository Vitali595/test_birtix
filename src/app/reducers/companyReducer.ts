const initialState = {
    company: [] as Array<CompanyType>
}

export const companyReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "companyReducer/SET_COMPANY":
            return {...state, company: action.data}
        default:
            return state
    }

}

export const setCompany = (data: Array<CompanyType>) => ({type: "companyReducer/SET_COMPANY", data} as const)

type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof setCompany>
type CompanyType = {
    ADDRESS: string | null
    ADDRESS_2: string | null
    ADDRESS_CITY: string | null
    ADDRESS_COUNTRY: string | null
    ADDRESS_COUNTRY_CODE: string | null
    ADDRESS_LEGAL: string | null
    ADDRESS_LOC_ADDR_ID: string | null
    ADDRESS_POSTAL_CODE: string | null
    ADDRESS_PROVINCE: string | null
    ADDRESS_REGION: string | null
    ASSIGNED_BY_ID: string
    BANKING_DETAILS: string | null
    COMMENTS: string
    COMPANY_TYPE: string
    CREATED_BY_ID: string
    CURRENCY_ID: string
    DATE_CREATE: string
    DATE_MODIFY: string
    EMPLOYEES: string
    HAS_EMAIL: string
    HAS_IMOL: string
    HAS_PHONE: string
    ID: string
    INDUSTRY: string
    IS_MY_COMPANY: string
    LEAD_ID: string | null
    LOGO: string | null
    MODIFY_BY_ID: string
    OPENED: string
    ORIGINATOR_ID: string | null
    ORIGIN_ID: string | null
    ORIGIN_VERSION: string | null
    REG_ADDRESS: string | null
    REG_ADDRESS_2: string | null
    REG_ADDRESS_CITY: string | null
    REG_ADDRESS_COUNTRY: string | null
    REG_ADDRESS_COUNTRY_CODE: string | null
    REG_ADDRESS_LOC_ADDR_ID: string | null
    REG_ADDRESS_POSTAL_CODE: string | null
    REG_ADDRESS_PROVINCE: string | null
    REG_ADDRESS_REGION: string | null
    REVENUE: string
    TITLE: string
    UTM_CAMPAIGN: string | null
    UTM_CONTENT: string | null
    UTM_MEDIUM: string | null
    UTM_SOURCE: string | null
    UTM_TERM: string | null
}