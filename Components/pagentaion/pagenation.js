import React from "react"
import "./style.css"

function Pagenation(props) {
    const { currPage, totalPages, previousPageClick, nextPageClick, pageClick } = props;
    if (totalPages <= 7) {
        return (
            <div className="pagenator">
                <button aria-label='Previous Page' onClick={previousPageClick} className={`btn ${currPage === 1 && "disabled"} navigationBtn`}>
                    {"≪"}
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button aria-label={`Page ${index+1}`} onClick={() => pageClick(index)} className={`btn ${currPage === index + 1 && "active"} digitBtn`} key={index + 1}>{index + 1}</button>
                ))}

                <button aria-label='Next Page' onClick={nextPageClick} className={`btn ${currPage === totalPages && "disabled"} navigationBtn`}>
                    {"≫"}
                </button>

            </div>
        )
    }
    else if (currPage <= 4) {
        return (
            <div  className="pagenator">
                <button aria-label='Previous Page' onClick={previousPageClick} className={`btn ${currPage === 1 && "disabled"} navigationBtn`}>
                    {"≪"}
                </button>

                {[...Array(5)].map((_, index) => (
                    <button aria-label={`Page ${index+1}`} onClick={() => pageClick(index)} className={`btn ${currPage === index + 1 && "active"} digitBtn`} key={index + 1}>{index + 1}</button>
                ))}

                <div aria-label={`Spacer`} className={`spacer`}>
                    {"...."}
                </div>

                <button aria-label={`Page ${totalPages}`} onClick={() => pageClick(totalPages-1)} className={`btn ${currPage ===  totalPages && "active"} digitBtn`}>{totalPages}</button>

                <button aria-label='Next Page' onClick={nextPageClick} className={`btn ${currPage === totalPages && "disabled"} navigationBtn`}>
                    {"≫"}
                </button>

            </div>
        )
    }
    else if(currPage>4 && currPage<=totalPages-4){
        return(
            <div className="mid-view pagenator">
                <button aria-label='Previous Page' onClick={previousPageClick} className={`btn ${currPage === 1 && "disabled"} navigationBtn`}>
                    {"≪"}
                </button>

                <button aria-label={`Page ${1}`} onClick={() => pageClick(0)} className={`btn ${currPage ===  1 && "active"} digitBtn`}>{1}</button>

                <div aria-label={`Spacer`} className={`spacer`}>
                    {"...."}
                </div>
                {[currPage-1,currPage,currPage+1].map((ele, index) => (
                    <button  aria-label={`Page ${ele}`} onClick={() => pageClick(ele-1)} className={`btn ${currPage === ele && "active"} digitBtn`} key={index + 1}>{ele}</button>
                ))}

                <div aria-label={`Spacer`} className={`spacer`}>
                    {"...."}
                </div>

                <button aria-label={`Page ${totalPages}`} onClick={() => pageClick(totalPages-1)} className={`btn ${currPage ===  totalPages && "active"} digitBtn`}>{totalPages}</button>


                <button aria-label='Next Page' onClick={nextPageClick} className={`btn ${currPage === totalPages && "disabled"} navigationBtn`}>
                    {"≫"}
                </button>

            </div>
        )
    }

    else if(currPage>=totalPages-3){
        return(
            <div className="mid-view pagenator">
                <button aria-label='Previous Page' onClick={previousPageClick} className={`btn ${currPage === 1 && "disabled"} navigationBtn`}>
                    {"≪"}
                </button>

                <button aria-label={`Page ${1}`} onClick={() => pageClick(0)} className={`btn ${currPage ===  1 && "active"} digitBtn`}>{1}</button>

                <div aria-label={`Spacer`} className={`spacer`}>
                    {"...."}
                </div>
                {[totalPages-4,totalPages-3,totalPages-2,totalPages-1,totalPages].map((ele, index) => (
                    <button aria-label={`Page ${ele}`} onClick={() => pageClick(ele-1)} className={`btn ${currPage === ele && "active"} digitBtn`} key={index + 1}>{ele}</button>
                ))}


                <button aria-label='Next Page' onClick={nextPageClick} className={`btn ${currPage === totalPages && "disabled"} navigationBtn`}>
                    {"≫"}
                </button>

            </div>
        )
    }
    return (
        <div>
            I am pagenation
        </div>
    )
}

export default Pagenation