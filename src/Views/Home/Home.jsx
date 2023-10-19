import Parallax from "../../Components/Parallax/Paralax";

export default function Home({}) {
    return(
        <div>
            <Parallax image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUQ_2aTD6sIh02wM3QYQqKnwyty4SwfQ-gQ&usqp=CAU" caption="Texto de la leyenda" parNum={0}/>
            <Parallax image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuUqiQroP-JSODGCVWIJ8uyHCaF4eVVz_LA&usqp=CAU" caption="Texto de la leyenda" parNum={1}/>
            <Parallax image="https://images.stockx.com/images/LEGO-Star-Wars-The-Clone-Wars-Clone-Walker-Battle-Pack-Set-8014.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1647885130&q=60" caption="Texto de la leyenda" parNum={2}/>
        </div>
    )
}