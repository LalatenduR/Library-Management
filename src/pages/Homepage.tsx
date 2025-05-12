import Footer from '@/components/Footer'
import React,{useEffect,useState} from 'react'
import Navbar from '@/components/Navbar'
import Carouselitem from '@/components/Carouselitem'
import { fetchcategories, fetchlatestbooks } from '@/api/booksApi'

const Homepage = () => {
    const [categories,setCategories]=useState<string[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [newarrival, setnewarrival] = useState<any[]>([]);
    useEffect(() => {
    document.title = "Home";
    }, []);
    useEffect(()=>{
        const getcategories=async()=>{
        try{
            const data=await fetchcategories();
            setCategories(data);
        }
        catch(error){
            console.error(error);
        }
        };
        getcategories();
    },[]);
    useEffect(()=>{
        const getnewarrival=async()=>{
            try{
                const data=await fetchlatestbooks();
                setnewarrival(data.books);
            }
            catch(error){
                console.error(error);
            }
        };
        getnewarrival();
    },[]);

  return (
    <div className='homepage bg-background min-h-screen flex flex-col overflow-x-hidden'>
        <Navbar/>
        <main>
            <section className="banner text-center py-16 bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to the Online Library!
            </h1>
            <p className="text-lg md:text-xl opacity-90">
                Discover, read, and explore thousands of books anytime, anywhere.
            </p>
            </section>
            <Carouselitem id='newarrivals' categories={newarrival} value='New Arrival'/>
            <Carouselitem id='categories' categories={categories} value='Categories'/>
        </main>
        <Footer/>
    </div>
  )
}

export default Homepage