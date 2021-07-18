// Partiendo de que tenemos una base de datos con la info de cada uno...
const predios = [
    {usuario: "usuario00001@gmail.com", contraseña: "contraseña00001", titular: "Leonardo Contreras Lopez", tipo: "casa", area: 100, 
        miembros: 
            [
            {edad: 32, genero: "M"}, 
            {edad: 26, genero: "F"}, 
            {edad: 8, genero: "F"}, 
            {edad: 5, genero: "M"}
            ]
    },
    {usuario: "usuario00002@gmail.com", contraseña: "contraseña00002", titular: "Sandra Hernandez Herrera", tipo: "apartamento", area: 80, 
    miembros: 
        [
        {edad: 28, genero: "M"}, 
        {edad: 22, genero: "F"}, 
        ]
    },
    {usuario: "usuario00003@gmail.com", contraseña: "contraseña00003", titular: "Leidy Zapata Montesinos", tipo: "casa", area: 120, 
    miembros: 
        [
        {edad: 42, genero: "M"}, 
        {edad: 30, genero: "F"}, 
        {edad: 12, genero: "F"}, 
        ] 
    },
    {usuario: "usuario00004@gmail.com", contraseña: "contraseña00004", titular: "Luisa Rendon Agudelo", tipo: "casa", area: 100, 
    miembros: 
        [
        {edad: 50, genero: "F"}, 
        {edad: 22, genero: "F"}, 
        ]         
    },
    {usuario: "usuario00005@gmail.com", contraseña: "contraseña00005", titular: "Antonio Yepes", tipo: "apartamento", area: 95,
        miembros: 
        [
        {edad: 26, genero: "M"}, 
        ]                   
    },
    {usuario: "usuario00006@gmail.com", contraseña: "contraseña00006", titular: "Tatiana Perea", tipo: "casa", area: 110, 
    miembros: 
        [
        {edad: 28, genero: "F"}, 
        {edad: 17, genero: "F"}, 
        ]         
    },
    {usuario: "usuario00007@gmail.com", contraseña: "contraseña00007", titular: "Karen Ruiz Hernadez", tipo: "apartamento", area: 90, 
    miembros: 
        [
        {edad: 26, genero: "F"}, 
        {edad: 25, genero: "M"}, 
        ]         
    },
    {usuario: "usuario00008@gmail.com", contraseña: "contraseña00008", titular: "Jaime Gomez Hernandez", tipo: "casa", area: 100, 
    miembros: 
        [
        {edad: 40, genero: "F"}, 
        {edad: 46, genero: "M"}, 
        {edad: 18, genero: "M"}
        ]   
    },
    {usuario: "usuario00009@gmail.com", contraseña: "contraseña00009", titular: "Daiana Usuga Gonzales", tipo: "casa", area: 110,
        miembros: 
        [
        {edad: 21, genero: "F"}, 
        {edad: 18, genero: "F"}, 
        ]         
    },
    {usuario: "usuario00010@gmail.com", contraseña: "contraseña00010", titular: "Alejandra Lopez Restrepo", tipo: "apartamento", area: 80,
    miembros: 
        [
        {edad: 23, genero: "F"}, 
        ]         
    },
    {usuario: "usuario00011@gmail.com", contraseña: "contraseña00011", titular: "Luis Morales Marin", tipo: "apartamento", area: 80, 
    miembros: 
        [
        {edad: 24, genero: "M"}, 
        ]        
    },
    {usuario: "usuario00012@gmail.com", contraseña: "contraseña00012", titular: "Sara Piedrahita", tipo: "casa", area: 120, 
    miembros: 
        [
        {edad: 50, genero: "M"}, 
        {edad: 45, genero: "F"}, 
        {edad: 20, genero: "F"}, 
        {edad: 15, genero: "M"}, 
        ]         
    },
    {usuario: "usuario00013@gmail.com", contraseña: "contraseña00013", titular: "Juan Moure", tipo: "casa", area: 100, 
    miembros: 
        [
        {edad: 65, genero: "M"}, 
        {edad: 55, genero: "F"}, 
        {edad: 27, genero: "M"}, 
        ]         
    },
    {usuario: "usuario00014@gmail.com", contraseña: "contraseña00014", titular: "Daniel Marin Velez", tipo: "casa", area: 90, 
    miembros: 
        [
        {edad: 21, genero: "M"}, 
        {edad: 17, genero: "F"}, 
        ]         
    },
    {usuario: "usuario00015@gmail.com", contraseña: "contraseña00015", titular: "Santiago Piedrahita Restrepo", tipo: "casa", area: 105, 
    miembros: 
        [
        {edad: 37, genero: "M"}, 
        {edad: 23, genero: "F"}, 
        ]         
    },
    {usuario: "usuario00016@gmail.com", contraseña: "contraseña00016", titular: "Pablo Corrales palacio", tipo: "apartamento", area: 95, 
    miembros: 
        [
        {edad: 26, genero: "M"}, 
        ]        
    },
    {usuario: "usuario00017@gmail.com", contraseña: "contraseña00017", titular: "Sandra Monsalve", tipo: "apartamento", area: 100, 
    miembros: 
        [
        {edad: 35, genero: "F"}, 
        {edad: 30, genero: "M"}, 
        ]         
    },
    {usuario: "usuario00018@gmail.com", contraseña: "contraseña00018", titular: "Tania Velez Perla", tipo: "apartamento", area: 90, 
    miembros: 
        [
        {edad: 20, genero: "F"}, 
        ]        
    },
    {usuario: "usuario00019@gmail.com", contraseña: "contraseña00019", titular: "Francisco Castaño Osorio", tipo: "casa", area: 97, 
    miembros: 
        [
        {edad: 27, genero: "M"}, 
        {edad: 21, genero: "F"}, 
        {edad: 3, genero: "F"}, 
        ]      
    },
    {usuario: "usuario00020@gmail.com", contraseña: "contraseña00020", titular: "Janet Martinez Marin", tipo: "apartamento", area: 100, 
    miembros: 
        [
        {edad: 25, genero: "F"}, 
        {edad: 27, genero: "M"}, 
        ]         
    }
];

// ------------------------------------------- persona ------------------------------------------------------------------------------
// Elementos html
const
$btn_form = document.querySelector('#btn-form'),
$value_username = document.querySelector('.email-username'),
$value_password = document.querySelector('.email-password'),
$check_in = document.querySelector('.check-in'),
$div_login = document.querySelector('.login');


// Variables para precios
let
valorAdm = 0,
valorAseo = 0,
valorGym = 0,
totalGym = 0,
total = 0,
totalAbsoluto = 0;

// Funcion para imprimir factura
const
checkIn = (i,titular,mes,valorAdm,valorAseo,totalGym,total)=>{
    // Removemos el div que contiene el login
    $div_login.classList.toggle('display-login')

    // Se inserta el formato de factura
    $check_in.innerHTML = 
    `
    <div class="div-table">
        <table class="content-table" border="1">
            <tr>
                <th colspan="4"><strong>Recibo de cobro mensual</strong></th>
            </tr>
            
            <tr>
                <th>Señores apartamento #${i}</th>
                <td>Titular: ${titular}</td>
                <th>Cuota de mes</th>
                <td>${mes}</td>
            </tr>
            
            <tr>
                <td colspan="2">Valor administración</td>
                <td colspan="2">${valorAdm}</td>
            </tr>
            
            <tr>
                <td colspan="2">Valor cuota de aseo</td>
                <td colspan="2">${valorAseo}</td>
            </tr>
            
            <tr>
                <td colspan="2">Derechos de gimnasio</td>
                <td colspan="2">${totalGym}</td>
            </tr>  
            
            <tr>
                <th colspan="2">Total a pagar</th>
                <th colspan="2">${total}</th>
            </tr>  
        
        </table>
    </div>
    `
},
// Funcion calcular precio gym
calcularPrecioGym = (i)=>{
    for(let j=0; j<predios[i].miembros.length; j++){
        let genero = (predios[i].miembros[j].genero),
            edad = (predios[i].miembros[j].edad)

        if(genero === "M"){
    
            if(edad < 10){
                valorGym = 0;
            }
            if( (edad >= 10) && (edad < 20)){
                valorGym = 20000;
            }
            if((edad >= 20) && (edad < 40)){
                valorGym = 15000;
            }
            if((edad >= 40) && (edad < 60)){
                valorGym = 10000;
            }
            if(edad > 60){
                valorGym = 0;
            }
        }
        if(genero === "F"){
            if( edad < 10){
                valorGym = 0;
            }
            if( (edad >= 10) &&  (edad < 18)){
                valorGym = 15000;
            }
            if((edad >= 18) && (edad < 35)){
                valorGym = 12000;
            }
            if((edad >= 35) && (edad < 55)){
                valorGym = 8000;
            }
            if(edad > 55){
                valorGym = 0;
            }
        }  
        totalGym = totalGym + valorGym;
    }
},
// funcion para calcular total gastos
calcularPrecios = (i)=>{
    let area = predios[i].area
    if(predios[i].tipo === "apartamento"){
        valorAdm = ((area * 1500) + 50000) 
        valorAseo = ((valorAdm * 0.1) + (area * 1000))
    }
    if(predios[i].tipo === "casa"){
        valorAdm = ((area * 1500) + 100000) 
        valorAseo = ((valorAdm * 0.1) + (area * 1000))
    }
        total = valorAdm + valorAseo + totalGym
};
 

document.addEventListener('click', e=>{
    if(e.target.matches('#btn-form')){
        e.preventDefault();
        for(let i=0; i<predios.length; i++){
            if((predios[i].usuario === $value_username.value) && (predios[i].contraseña === $value_password.value)){
                calcularPrecioGym(i);
                calcularPrecios(i);

                let titular = predios[i].titular;

                checkIn((i+1),titular, "Enero", valorAdm, valorAseo, totalGym, total);
            };
        } ;   
    };
});

// ------------------------------------------- empresa ------------------------------------------------------------------------------
// Usuarios Administradores
const
adm = [
    {usuario: "adm123456@gmail.com", contraseña: "123456"},
    {usuario: "adm654321@gmail.com", contraseña: "654321"},
    {usuario: "adm456789@gmail.com", contraseña: "456789"}
];
// Elementos html
const
$btn_form_adm = document.querySelector('#btn-form-adm'),
$value_username_adm = document.querySelector('.email-username-adm'),
$value_password_adm = document.querySelector('.email-password-adm'),
$check_in_adm = document.querySelector('.check-in-adm'),
$div_login_adm = document.querySelector('.login-adm');


// función para imprimir facturas adm
const
checkInAdm = (i,titular,mes,valorAdm,valorAseo,totalGym,total)=>{
    // Se inserta el formato de factura
    $check_in_adm.insertAdjacentHTML('beforeend', 
    `
    <div class="div-table">
        <table class="content-table" border="1">
            <tr>
                <th colspan="4"><strong>Recibo de cobro mensual</strong></th>
            </tr>
            
            <tr>
                <th>Señores apartamento #${i}</th>
                <td>Titular: ${titular}</td>
                <th>Cuota de mes</th>
                <td>${mes}</td>
            </tr>
            
            <tr>
                <td colspan="2">Valor administración</td>
                <td colspan="2">${valorAdm}</td>
            </tr>
            
            <tr>
                <td colspan="2">Valor cuota de aseo</td>
                <td colspan="2">${valorAseo}</td>
            </tr>
            
            <tr>
                <td colspan="2">Derechos de gimnasio</td>
                <td colspan="2">${totalGym}</td>
            </tr>  
            
            <tr>
                <th colspan="2">Total a pagar</th>
                <th colspan="2">${total}</th>
            </tr>  
        
        </table>
    </div>
    `)
    
},
imprimirTotal = (totalAbsoluto)=>{
    $check_in_adm.insertAdjacentHTML('beforeend', 
    `
    <div class="div-table">
        <table class="content-table" border="1">
            <tr>
                <th colspan="4"><strong>Total cobro de los 20 predios</strong></th>
            </tr>
            
            <tr>
                <th>Total a cobrar</th>
                <td>${totalAbsoluto}</td>
            </tr>
        </table>
    </div>
    `)
};

document.addEventListener('click', e=>{
    if(e.target.matches('#btn-form-adm')){
        e.preventDefault();
        for(let i=0; i<adm.length; i++){

            if((adm[i].usuario === $value_username_adm.value) && (adm[i].contraseña === $value_password_adm.value)){
                // Removemos el div que contiene el login
                $div_login_adm.classList.toggle('display-login')

                for(let i=0; i<predios.length; i++){
                    calcularPrecioGym(i);
                    calcularPrecios(i);
    
                    let titular = predios[i].titular;
    
                    checkInAdm((i+1),titular, "Enero", valorAdm, valorAseo, totalGym, total);

                    totalAbsoluto = totalAbsoluto + total;
    
                }
                if(i = 19){
                    imprimirTotal(totalAbsoluto);
                }
            };
        } ; 
    };
});