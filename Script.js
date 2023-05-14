// // async function get(){
    // let slct1 = document.getElementById("slct1");
    // let slct2 = document.getElementById("slct2");



// //     const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
// //     const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/2/comments")
// //     const data1 = await response1.json()
// //     const data2 = await response2.json()

// //     if(slct1.value == data1[0]){
// //         var optionArry = [data2.id];
// //     }

// //     console.log(data1[1])
// //     console.log(data2[1])

// //     data1.map(function(discription){
// //         console.log(discription.id)
// //     })
// //     data2.map(function(discription){
// //         console.log(discription.id)
// //     })

// //     // document.querySelector("#content h1").innerHTML = data[1].id


// //     document.querySelector("#descrip").innerHTML = 
// //     `<select>
// //     ${
// //         data.map(discription => `<option>${discription.name}</option>`)
// //     }
//     // </select>
// //     `
// // }
// // get()


// async function getDataFromApi(){
//     let slct1 = document.getElementById('slct1');
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
//     const data= await response.json();

// //     for(var i = 0; i < data.length; i++){
// //     console.log(data[i].name);
// // }

//     data.map(function(discription){
//         console.log(discription.id)
//     })
//     document.querySelector("#slct1").innerHTML =
//     `<select>
//     ${
//         data.map(discription => `<option> ${discription.name}</option>`)
//     }
//     </select>`
// }

// getDataFromApi();

// async function getDataFromApiSelect2(){
//     let slct2 = document.getElementById('slct2');
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/2/comments");
//     const data= await response.json();

//     for(var i = 0; i < data.length; i++){
//     console.log(data[i].name);
// }

//     if(getDataFromApi.data == data[0]){
        
//     }

//     data.map(function(discription){
//         console.log(discription.id)
//     })
//     document.querySelector("#slct2").innerHTML =
//     `<select>
//     ${
//         data.map(discription => `<option> ${discription.email}</option>`)
//     }
//     </select>`
    
// }

// getDataFromApiSelect2();


// async function getDataFromApiSelect3(){
//     let slct3 = document.getElementById('slct3');
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/2/comments");
//     const data= await response.json();

// //     for(var i = 0; i < data.length; i++){
// //     console.log(data[i].name);
// // }

//     data.map(function(discription){
//         console.log(discription.id)
//     })
    // document.querySelector("#slct3").innerHTML =
    // `<select>
    // ${
    //     data.map(discription => `<option> ${discription.id}</option>`)
    // }
    // </select>`
    
// }

// getDataFromApiSelect3();




// async function populate(slct1,slct2){
//     let slcat1 = document.getElementById("slct1");
//     let slcat2 = document.getElementById("slct2");

//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/2/comments");
//     const data= await response.json();

//     for(var i = 0; i < data.length; i++){
//     console.log(data[i].name);
// }

//     slct2.innerHTML = "";
//     if(slct1.value == data[0]){
//         var optionArray = data[0];
//     }
//     else  if(slct1.value == data[1]){
//         var optionArray = ["|", "charger|Charger", "dorango|Dorango", "chalinger|Chalinger"];
//     }
//     else  if(slct1.value == data[2]){
//         var optionArray = ["|", "grandmarcees|Grandmarcees", "mustang|Mustang", "endeavour|Endeavour"];
//     }

//     for( var option in optionArray){
//         var pair = optionArray[option].split("|");
//         var newOption = document.createElement("option");
//         newOption.value = pair[0];
//         newOption.innerHTML= pair[1];
//         s2.options.add(newOption);
//     }

    

// }

// populate();






async function getInspType(){
    let s1 = document.getElementById('slct1');
    let s2 = document.getElementById('slct2');

    const response1 = await fetch('locationa');
    const data1 = await response1.json();

    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data2 = await response2.json();

    console.log(data1[0].name)
    console.log(data2[0].id)

    document.querySelector("#slct1").innerHTML =
    `<select>
    ${
        data1.map(discription => `<option> ${discription.email}</option>`)
    }
    </select>`

    document.querySelector("#slct2").innerHTML =
    `<select>
    ${
        data1.map(discription => `<option> ${discription.name}</option>`)
    }
    </select>`

    
}
// getInspType()



// async function getMeasGroup(){
//     let s1 = document.getElementById('slct1');
//     let s2 = document.getElementById('slct2');

//     const response1 = await fetch(url.locationa);
//     const data1 = await response1.json();

//     const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     const data2 = await response2.json();

//     console.log(data1[0].name)
//     console.log(data2[0].id)

//     document.querySelector("#slct1").innerHTML =
//     `<select>
//     ${
//         for(let i = o; i< data1.length; i++){
//         data1.map(discription => `<option value="${Range(0,2)}"> ${discription.email}</option>`)
    
//     }
//     </select>`

//     // document.querySelector("#slct2").innerHTML =
    // `<select>
    // ${
    //     data1.map(discription => `<option> ${discription.name}</option>`)
    // }
    // </select>`

    
// }

// document.getElementById('slct1').onchange = async function(){
//     let s2 = document.getElementById('slct2');
   
//     const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     const data2 = await response2.json();

//     console.log(data2[0].id)
// }



// var url = {
//     'inspTypes' : "https://jsonplaceholder.typicode.com/posts/1/comments",
//     'measGroup' : "https://jsonplaceholder.typicode.com/posts/2/comments",
//     'locationa' : "https://jsonplaceholder.typicode.com/posts/3/comments",
// }



// function whenChange(){
//     let s1 = document.getElementById('slct1').value;
//     let s2 = document.getElementById('slct2').value;

//     if(s1.value == getMeasGroup.data2.discription[1]){
//         console.log
//     }

// }

// getConsole();

async function checkIsSelect(){
    let row = document.getElementById('row');
    let input = document.getElementById('class-label');
    var newLabel = document.createElement('label');
    
    // const response = await fetch(',,,,,');
    // const data = response.json();

    let arr = [];

    row = document.createTextNode


    for(var i = 0; i < 5; i++){
       input.appendChild(document.createElement('label').innerHTML=[i])
        // return i;
    }

}

checkIsSelect();


if(data.measutypes.is_select == false){
    data1.map(discription => `<option> ${discription.email}</option>`)
} else{
    document.querySelector("#slct2").innerHTML =
    `<select>
    ${
        data1.map(discription => `<option> ${discription.name}</option>`)
    }
    </select>`
}

function say_hi_by(name,num){
    let hiBy;
    if(num == 0){
    hiBy = 'Bye';
    } else if(num == 1){
    hiBy = 'Hi';
    } else {
    hiBy = 0;
    }
    
    console.log(hiBy + '' + name)
}

say_hi_by('Anas',0)


function getFrame(){
   var frameDiv = document.getElementById('#myIframe');
   frameDiv.createElement('iframe');

   console.log();
}