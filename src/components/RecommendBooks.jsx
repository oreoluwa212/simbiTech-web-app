import { booksData } from "../utilities/data";

const RecommendBooks = () => {
    return ( 
        <section className="mt-5 ">
            <div className="flex justify-between">
                <h1 className="mb-6 font-bold text-[#2B002B] text-3xl">Recommended Books</h1>
            </div>
            <div className="flex gap-9 ">
                {booksData.map((book, id)=>(
                    <div key={id} className=" bg-white p-[.6rem] border border-[#DFE1E6] rounded-2xl shadow-xl w-full max-w-sm">
                        <div className="flex flex-col gap-3">
                            <img src={book.image} alt="Book Image" />
                            <div>
                                <p className="font-bold text-black text-sm ">
                                    {book.field}
                                </p>
                                <p className=" text-xs">{book.author}</p>      
                            </div>
                        </div>    
                    </div>
                ))

                }
            </div>
        </section>
     );
}
 
export default RecommendBooks;