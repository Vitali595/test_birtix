import React from "react"
import {AppRootStateType} from "../store"
import {useSelector} from "react-redux"
import style from "./Deal.module.css"

export const Deals: React.FC = () => {

    const {deals} = useSelector((state: AppRootStateType) => state.deals)
    const {company} = useSelector((state: AppRootStateType) => state.company)

    return (
        <table className={style.table}>
            <thead className={style.thead}>
            <tr className={style.tr}>
                <td className={style.td}>ID</td>
                <td className={style.td}>Наименование</td>
                <td className={style.td}>Стадия сделки</td>
                <td className={style.td}>Сумма</td>
                <td className={style.td}>Клиент</td>
            </tr>
            </thead>
            <tbody className={style.tbody}>
            {deals.map((deal) => {

                let currentCompany = company.find(c => c.ID === deal.COMPANY_ID)

                return <tr className={style.tr} key={deal.ID}>
                    <td className={style.td}>{deal.ID}</td>
                    <td className={style.td}><a
                        href={`https://b24-sz74gm.bitrix24.ru/crm/deal/details/${deal.ID}/`}>{deal.TITLE}</a></td>
                    <td className={style.td}>{deal.STAGE_ID}</td>
                    <td className={style.td}>{deal.OPPORTUNITY}</td>
                    <td className={style.td}>{
                        currentCompany
                            ? <a href={`https://b24-sz74gm.bitrix24.ru/crm/company/details/${currentCompany.ID}/`}>
                                {currentCompany.TITLE}</a>
                            : "---"
                    }</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}