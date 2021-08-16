import { fetchSpreadSheet } from "../infra/spread_sheet/fetchSpreadSheet"

/**
 * 許可された要望のみを取得する
 */
export const fetchApprovalContent = async () => {
    const data = await fetchSpreadSheet()

    return data.filter(v => v.public).reverse()
}