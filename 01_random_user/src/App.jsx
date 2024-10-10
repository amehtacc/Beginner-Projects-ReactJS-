import { useContext } from 'react'
import Card from "./components/Card";
import UserContext from "./contexts/UserContext";

function App() {
  const { data } = useContext(UserContext);


  return (
    <div>
      <div className="w-full">
        <h1 className="bg-yellow-400 p-5 text-white text-center text-4xl font-bold">
          User List
        </h1>
      </div>
      <div className="w-full bg-blue-400 h-full grid grid-cols-4 gap-6 p-10">
        <Card
          link={data[0]?.picture.large}
          name={`${data[0]?.name.first} ${data[0]?.name.last}`}
          age={data[0]?.dob.age}
          address={`${data[0]?.location.city}, ${data[0]?.location.state}, ${data[0]?.location.country}`}
          email={data[0]?.email}
          phone={data[0]?.phone}
        />
        <Card
          link={data[1]?.picture.large}
          name={`${data[1]?.name.first} ${data[1]?.name.last}`}
          age={data[1]?.dob.age}
          address={`${data[1]?.location.city}, ${data[1]?.location.state}, ${data[1]?.location.country}`}
          email={data[1]?.email}
          phone={data[1]?.phone}
        />
        <Card
          link={data[2]?.picture.large}
          name={`${data[2]?.name.first} ${data[2]?.name.last}`}
          age={data[2]?.dob.age}
          address={`${data[2]?.location.city}, ${data[2]?.location.state}, ${data[2]?.location.country}`}
          email={data[2]?.email}
          phone={data[2]?.phone}
        />
        <Card
          link={data[3]?.picture.large}
          name={`${data[3]?.name.first} ${data[3]?.name.last}`}
          age={data[3]?.dob.age}
          address={`${data[3]?.location.city}, ${data[3]?.location.state}, ${data[3]?.location.country}`}
          email={data[3]?.email}
          phone={data[3]?.phone}
        />
        <Card
          link={data[4]?.picture.large}
          name={`${data[4]?.name.first} ${data[4]?.name.last}`}
          age={data[4]?.dob.age}
          address={`${data[4]?.location.city}, ${data[4]?.location.state}, ${data[4]?.location.country}`}
          email={data[4]?.email}
          phone={data[4]?.phone}
        />
        
      </div>
    </div>
  );
}

export default App;
