

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.getElementsByTagName('ul');

btn.addEventListener('click', () => {
    let searchedText = inp.value;
    console.log(inp.value);
    inp.value = "";
    fetch(`http://localhost:3000/fetch-data`)
      .then((res) => {
          console.log(res); 
          if (!res.ok) {
              throw new Error('Network response was not ok.');
          }
          return res.text();
      })
      .then((completeData) => {
          console.log(completeData);
      })
      .catch((err) => {
          console.log(err);
      });
});

// // function fetchApi(searchedText) {
// //     fetch(`https://www.communitybenefitinsight.org/api/get_hospitals.php`, {
// //         method: 'GET',
// //         mode: 'no-cors',
// //     })
// //     .then((res) => {
// //         console.log(res); 
// //         if (!res.ok) {
// //             throw new Error('Network response was not ok.');
// //         }
// //         return res.text();
// //     })
// //     .then((completeData) => {
// //         console.log(completeData);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });
// // }



// function fetchHospitalData() {
//     // Define the API URL
//     const apiUrl = 'https://www.communitybenefitinsight.org/api/get_hospitals.php';
  
//     // Make a GET request using the fetch API
//     fetch(apiUrl,{
//         method : "GET",
//         mode: "cors",
//     })
//       .then((response) => {
//         console.log(response); 
//         if (!response.ok) {
//           throw new Error('Network response was not ok.');
//         }
//         return response.text(); // Assuming the API returns JSON data
//       })
//       .then((data) => {
//         // Handle the data here
//         console.log(data);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   }
//   // fetchHospitalData(); 


