import myHeader from "./componentes/myHeader.js"
import myBanner from "./componentes/myBanner.js";
import myAside from "./componentes/myAside.js";
import myCarrousel from "./componentes/myCarrousel.js";
import myArticle1 from "./componentes/myArticle1.js";
import myArticle2 from "./componentes/myArticle2.js";
import myList from "./componentes/myList.js";
import myTable from "./componentes/myTable.js";
import myFooter from "./componentes/myFooter.js";

//Header
myHeader.listarInfo();
myHeader.listarTitle();

//Banner
myBanner.showImg();

//Carrousel
myCarrousel.showTitle();
myCarrousel.showPost();

//Aside
myAside.showAside();

//Article1
myArticle1.showSection1();

//Article2
myArticle2.showSection2();

//List
myList.showSection();
myList.showList();

//Table
myTable.showSection();
myTable.showTable();

//Footer
myFooter.showFooter();