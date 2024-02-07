import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidedar/Sidebar"
import Contents from "../components/Contents/Contents"
// import Tags from "../components/Tags/Tags"


function MainLayout() {
  return (
   <section id="main-layout">
    <Nav/>
    <Sidebar/>
    <Contents/>
    {/* <Tags/> */}
  </section>
  );
}

export default MainLayout;