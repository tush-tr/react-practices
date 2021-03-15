import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import {Note} from "./Note";
import notes from "./notes"

function App() {
  return (
    <body>
      <Header />
      {
        notes.map((e)=>{
          return(
            <Note title={e.title} key={e.key} content={e.content} />
          )
        })
      }
      <Footer />
      
    </body>
  );
}
export default App;
