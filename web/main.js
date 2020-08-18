window.onload=()=>{
    fetch('https://repaso-git-master.a13h0sj2.vercel.app/api/meals')
    .then(response => response.json())
    .then(data => console.log(data))    
    
}