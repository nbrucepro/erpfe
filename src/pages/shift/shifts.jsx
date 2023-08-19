import { useMemo } from "react";
import {COLUMNS} from '../../components/shared/shiftColumns'
import MOCK from '../../components/shared/MOCK.json'
import { useTable } from "react-table";
import LayoutAuthenticated from "../../layouts/Authenticated";
const Shifts = () => {
const columns = useMemo(()=>COLUMNS,[]);
const data = useMemo(()=>MOCK,[]);
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
}=useTable({columns,data})

return (
    <>
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column=>(
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell=>{
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                )
            })}
            
        </tbody>        
    </table>
    </>
)

}
Shifts.getLayout=function getLayout(page){
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Shifts;