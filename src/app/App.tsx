import React, {useEffect} from "react"
import {Deals} from "./table/Deals"
import {setDeals} from "./reducers/dealsReducer"
import {useDispatch} from "react-redux"
import {setCompany} from "./reducers/companyReducer"

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
// Не совсем разобрался с запросами, поэтому сделал их здесь.
        // @ts-ignore
        BX24.callMethod(
            "crm.deal.list",
            {},
            function (result: any) {
                if (result.error())
                    console.error(result.error())
                else {
                    dispatch(setDeals(result.data()))
                }
            }
        )
        // @ts-ignore
        BX24.callMethod(
            "crm.company.list",
            {},
            function (result: any) {
                if (result.error())
                    console.error(result.error())
                else {
                    dispatch(setCompany(result.data()))
                }
            }
        )
    }, [])

    return (
        <div>
            <Deals/>
        </div>
    )
}

export default App