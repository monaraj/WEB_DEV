const jsdom=require('jsdom');
const request = require('request');
const {JSDOM}=jsdom;
const link="https://www.amazon.in/s?k=watermelon+in+fresh+vegetables&crid=2V7URGOMTSOSC&sprefix=watermelon+in+fresh+vegetables%2Caps%2C199&ref=nb_sb_ss_ts-doa-p_1_30";
request(link,cb);
function cb(error,response,html){
    if(error)
    console.log("oops..wrong link",error);
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let alli
        tems=document.querySelectorAll(".table");
console.log(morethan5.length)
        for(let i=0;i<morethan5.length;i++){
            let rows = morethan5[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let matchwon = tds[2].textContent;
                    console.log("Name of Team--> "+name+" "+"Match won-->"+matchwon);
        }
        

    }
}
    }
}