import { completedBooks } from "../utilities/data";

const ReadBooks = () => {
    return ( 
        <section className="mt-5 ">
            <div className="flex justify-between">
                <h1 className="mb-6 font-bold text-[#2B002B] text-3xl">Read Books</h1>
            </div>
            <div className="flex flex-row gap-9 ">
                {completedBooks.map((book, id)=>(
                    <div key={id} className=" bg-white p-[1.2rem] border border-[#DFE1E6] rounded-[4px] shadow-md w-60 h-65">
                        <div className="flex flex-col gap-3">
                            <img src={book.image} alt="Book Image" />
                            <div>
                                <p className="font-bold text-black text-sm overflow-hidden">
                                    {book.title}
                                </p>
                                <p className=" text-xs overflow-hidden">{book.author}</p>      
                            </div>
                        </div>    
                    </div>
                ))

                }
            </div>
        </section>
     );
}
 
export default ReadBooks;