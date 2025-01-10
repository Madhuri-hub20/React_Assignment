import Card from './Component/Card'
import SearchBar from './Component/SearchBar'

function App() {
  const data = [1, 2, 3];
  const cardData = [
    {
      id: "1",
      imgPath: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      title: "The Birds"
    },
    {
      id: "2",
      imgPath: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      title: "Birds"
    },
    {
      id: "3",
      imgPath: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      title: "The Birds"
    },
    {
      id: "3",
      imgPath: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      title: "The Birds"
    },
    {
      id: "3",
      imgPath: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      title: "The Birds"
    },
    {
      id: "3",
      imgPath: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      title: "The Birds"
    },
    {
      id: "3",
      imgPath: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      title: "The Birds"
    }
  ]

  return (
    <>
      <div className="bg-black ">
        <SearchBar/>
        <div className=" grid grid-cols-3">
          {cardData.map((item) => (
            <Card key={item.id} imgPath= {item.imgPath} title = {item.title} />//key is identifire and item means values we have declare in the above variable
          ))}
        </div>



      </div>
    </>
  )
}

export default App
