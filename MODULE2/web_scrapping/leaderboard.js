const request = require('request');
const fs = require("fs");
const jsdom=require('jsdom');
const {JSDOM}=jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderboard = [];     //an array to store all the player details
request(link,cb);
function cb(error,response,html){
    if(error)
    console.log("oops..wrong link",error);
    else{
        const dom = new JSDOM(html);   //parsing html page o given link
        const document = dom.window.document;  // now everything is here
        let scorecardtag = document.querySelectorAll('.ds-px-4.ds-py-3 a');  //taking all tags of scorecard
        //console.log(scorecardtag)
        for(let i=0; i<scorecardtag.length;i++){    //for all scorecard
            linkforplayer=scorecardtag[i].href;     // consideering each one n taking its link
            //console.log(completelinkforplayer);   // printing all links for all scoirecard
            completelinkforplayer="https://www.espncricinfo.com"+linkforplayer;  // adding the site link to scorecard link
            request(completelinkforplayer,cb2);// requesting now for the a tag scorecard links ..calling cb2 funbction
        }    
        }
    }
     function cb2(error,response,html){
      if(error){
           console.log(error);
         }
         else{
             const dom = new JSDOM(html);   //p  arsing html page of given link of href 
             const document = dom.window.document;  // now everything is here
             let batsmenRow = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table tbody tr");//taking all rows each row has a player
             for(let i=0;i<batsmenRow.length;i++){
                 let cells = batsmenRow[i].querySelectorAll("td");// one player data
                if(cells.length == 8){               //taking only required cells
                        let name = cells[0].textContent; //taking data from td[0]
                    let runs = cells[2].textContent; //textContent returns string bydefault
                     let balls = cells[3].textContent;
                     let fours = cells[5].textContent;
                     let sixes = cells[6].textContent;
                 // console.log("Name : ",name,"Runs : ",runs,"Balls : ",balls,"Fours : ",fours,"Sixes : ",sixes);
                processPlayer(name,runs,balls,fours,sixes);      
             }
         }
    
        //  console.log(leaderboard);
         let data = JSON.stringify(leaderboard);
         fs.writeFileSync('BatsmenStats.json',data);
    }
}



//function to s0orting the players n adding up their scores from all the matches

function processPlayer(name,runs,balls,fours,sixes){  //these parameters r passed by the leaderboard array which we took using textcontent in string format 
//now converting runs balls fours n sixes into no.
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours); 
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];      //taking all asked data of each player stored in learderboard array 
        if(playerObj.Name == name){  //checking for same player 
            //will add up the runs balls 4s 6s to the found player
            playerObj.Runs+=runs;
            playerObj.Innings+=1;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return;
        }
    } 
        //code coming here we didnt find the player
        //so create the player 
        let obj = {
            Name:name,
            Innings:1,
            Runs:runs,
            Balls:balls,
            Fours:fours,
            Sixes:sixes
        }
        leaderboard.push(obj);   //adding this player in the array of all player
    }
