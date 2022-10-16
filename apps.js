let voteCount = "Vote Count: "
let votefor = 0;
let TINIBU  = 20;
let voteagainst =0;
//document.write(vote(1));
// if else if and else statements
if(TINIBU<50){
    document.write("TINIBU lost the election ")

}else{
    document.write("PETER OBI wins  the election")
}
//function for vote for
function votef(){
    votefor = votefor +1
    document.getElementById("count1").innerText = voteCount + votefor
 
}
//function for vote against
function voteA(){
    voteagainst = voteagainst +1
    document.getElementById("count2").
    innerText = voteCount + voteagainst
 
}
//function for total vote
function total(){
    let reading = "Total Vote Cast: " 
    voteTotal = votefor +  voteagainst
    document.getElementById("count3").innerText = 
    reading + voteTotal 
}
 

//function for percentage of vote for
function voteperfor(){
    let read1 = "vote count for%: "  
        votepercentage = votefor / voteTotal * 100
        document.getElementById("count5").innerText = 
        read1 + votepercentage + "%"


}
//function for percentage of vote against
function voteperagainst(){
    let read1 = "vote count against%: " 
    votepercentage = voteagainst / voteTotal * 100
    document.getElementById("count6").innerText = read1 +  votepercentage + "%"

}
