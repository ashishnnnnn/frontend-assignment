import React ,{useState} from 'react';
import Table from "../table/table";
import Pagenation from '../pagentaion/pagenation';
import "./style.css"

function RenderData(props){
    const {data ,perPageData} = props
    const [currPage,setCurrPage] = useState(0)

    const startIdx = currPage*perPageData;

    const shownData = data.length>0 ? data.slice(startIdx,startIdx+perPageData):[]
    const totalPages = Math.ceil(data.length / perPageData);

    const nextPageClick = ()=>{
        setCurrPage((currPage)=>currPage+1)
    }

    const previousPageClick = ()=>{
        setCurrPage((currPage)=>currPage-1)
    }

    const pageClick=(page)=>{
        setCurrPage(page)
    }
    return(
        <div className='renderData'>
            <div className='wrapper' role="region" aria-live="polite" aria-labelledby="tableData">
                <Table data={shownData} />
            </div>
            <div className='wrapper' role="region" aria-live="polite" aria-labelledby="pagination">
                <Pagenation pageClick={pageClick} nextPageClick={nextPageClick} previousPageClick={previousPageClick} totalPages={totalPages} currPage={currPage+1}/>
            </div>
            
        </div>
    )
}

export default RenderData;