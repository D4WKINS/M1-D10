


       // JS EXERCISES

       // 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

       let x = "John"
       let y = "Doe"
           console.log(x + "<>" + y)
      
       // 22) Create an object with properties such name, surname, email 

       let person ={
           name:"Carl",
           surname:"Dawkins",
           email:"carlanthony782@gmail.com"
       }
    //    console.log(person)

       // 23) Delete Email from the previously created object 

       delete person['email']
    //    console.log(person)

       // 24) Create an array with 10 strings in it

       let arr = ["We", "Have", "Got", "Memes", "For", "Days", "Son", "Come", "Get", "Some!"]

       // 25) Print in the console every string in the previous array

    //    arr.forEach(str => console.log(str))

       // 26) Create an array with 100 random numbers in it
       let arrRandomNum =[]
       const genRandom = (range) => Math.floor(Math.random()* range)+1

       for(let i = 0; i < 100; i++){
        arrRandomNum.push(genRandom(100))
       }
    //    console.log(arrRandomNum)
       

       // 27) Wrote a function to get the MAX and the MIN from the previously created array

       function maxNum(numArray) {
        return Math.max.apply(null, numArray);
      }
      function minNum(numArray) {
        return Math.min.apply(null, numArray);
      }
    //   console.log("The highest number is" + " ", maxNum(arrRandomNum)+ " " + " and the lowest number is" + " " + minNum(arrRandomNum) )
    //   maxNum(arrRandomNum)
    


       // 28) Create an array of arrays, in which every array has 10 random numbers

       let arrOfArr =[[],[], []]
        for(let i=0; i<10; i++){
         arrOfArr.forEach( arr => arr.push(genRandom(100)));
        }
        // console.log(arrOfArr)

       // 29) Create a function that gets 2 arrays and returns the longest one

       let twoArrs = [
           [2,6,3,6,4,7,4,3,6,7,3],
           [5,3,6,5,6,6,2,7,2]
       ]

       const getLongestArr = function(){
            if(twoArrs[0].length>twoArrs[1].length){
                return console.log(twoArrs[0])
            }
            else if(twoArrs[1].length>twoArrs[0].length){
                return console.log(twoArrs[1])
            }
       }
        getLongestArr()


       // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

        const getHighestArr = function(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
                let arr1 = twoArrs[0].reduce(reducer)
                let arr2 = twoArrs[1].reduce(reducer)

                return   arr1 > arr2 ? arr1 
                        :(arr2 > arr1) ? arr2 
                        : false
        }
        console.log(getHighestArr())
       

       // DOM 

       // 31) Get element with ID "container" from the page 

       let getContainer = document.getElementById('container');

       // 32) Get every "td" from the page 

       let tableData = document.getElementsByTagName('td')
       
       // 33) Create a cycle that prints the text inside every td of the page

       for(let i = 0; i <tableData.length; i++){
            console.log(tableData[i].innerText)
       }

       // 34) Write a function to change the heading of the page

       const changeHeading = function(){
         let heading = document.getElementsByTagName('h1')[0]

         setTimeout(() => {
            heading.innerText = "MEME TOWN"
         }, 3000);
       }
       changeHeading()

       // 35) Write a function to add an extra row to the table

       const addRow = function(){
         let tr = document.createElement('tr')
         let table = document.getElementsByTagName('table')[0]
         tr.innerHTML = `<h1>YEEE BOI</h1>`
         table.appendChild(tr)
       }
         addRow()

       // 36) Write a function to add the class "test" to each row in the table

       const addClass = function(){
         let tr = document.getElementsByTagName('tr')
            
         for(let i= 0; i <tr.length; i++){
               tr[i].classList.add('test')
         }
       }
         addClass()
      

       // 37) Write a function to add a red background to every link in the page

       const redBgLinks = function(){

         let a = document.getElementsByTagName('a')
            for(let i = 0; i < a.length; i++){
                  a[i].style.backgroundColor = "red"
            }
       }
       redBgLinks()

       // 38) Console log "Page loaded" when the page is correctly loaded

       window.addEventListener('load',() =>{
         console.log("Page Loaded")
       })

       // 39) Write a function to add new items to a UL

       const addItemUl = function(){

            let ul = document.querySelector('#container ul')
            let li = document.createElement('li')
            ul.appendChild(li)
       }
       addItemUl()

       // 40) Write a function to empty a list

       const emptyList = function(){

            let list = document.querySelectorAll('ol li')
                  for(let i = 0; i< list.length; i++){
                        list[i].innerText = ""
                  }
       }
       emptyList()

       // EXTRA 

       // 41) Add an eventListener to alert when the mouse is over a link, displaying the URL

       let link = document.getElementsByTagName('a')
       for(let i = 0; i < link.length; i++){
       link[i].addEventListener('mouseover',(event)=>{
               alert(event.target.href)
       })
      }
       // 42) Add a button to hide every image on the page

      const hideBtn = function(){
         let header = document.querySelector('header') 
         let btn = document.createElement('Button')
         let img =  document.getElementsByTagName('img')
         btn.innerText ="Hide"
         header.appendChild(btn)
         for(let i = 0; i<img.length; i++){
         btn.addEventListener("click",() =>{
            img[i].style.visibility = "hidden"
         })
      }
   } 
      hideBtn()


       // 43) Add a button to hide and show the table from the page

       // 44) Write a function to sum every number inside the TD (if the content is numeric)

       // 45) Delete the last letter from the title each time the user clicks on it

       // 46) Change a single TD background color when the user clicks on it

       // 47) Add a button DELETE, on click it should delete a random TD from the page

       // 48) Add a pink border to a cell when the mouse is over it

       // 49) Write a function to add a table with 4 rows and 3 columns programmatically

       // 50) Write a function to remove the table from the page