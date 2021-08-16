import axios from "axios"
const csvtojson = require('csvtojson')

const SPREAD_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRMAf5rZpMG9_OzqpNFqpzpzr2zfuTSBjk8oiUGlPm6eeT6aP3LNdc9G3vaGuJS9pZjEd8tAtn_f55E/pub?output=csv'

export interface SpreadSheetContent {
    // 投稿日
    timeStamp: string;
    // 本文
    contents: string
    // 何か書きたいことがあったら
    comment?: string
    // ニックネーム
    nickName: string
    // 公開するかどうか
    public: boolean
}
/**
 * スプレッドシートの取得
 */
export const fetchSpreadSheet = async () => {
    const { data } = await axios.get(SPREAD_SHEET_URL)
    const obj = await csvtojson({
        noheader: false,  // 1行目がヘッダーの場合はfalse
        output: "csv"
    })
        .fromString(data)

    return (obj as [string, string, string, string, string][])
        .map((arr): SpreadSheetContent => ({
            timeStamp: arr[0],
            contents: arr[1],
            comment: arr[2],
            nickName: arr[3],
            public: arr[4] === "TRUE"
        }))
}