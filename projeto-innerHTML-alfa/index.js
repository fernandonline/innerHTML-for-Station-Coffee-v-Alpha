document.getElementById('btn').addEventListener('click', function() {
    var banner = document.getElementById('banner-entrada').value;
    var titulo = document.getElementById('titulo-entrada').value;
    var subtitulo = document.getElementById('subtitulo-entrada').value;
    var texto = document.getElementById('texto-entrada').value;

    var novoHtml = `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <!-- meta tags inicio -->
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
        <meta name="theme-color" content="#f836b7" />
    <meta property="og:url" content="https://stationcoffee.miolly.tech" />
    <meta property="og:title" content="Vencedor de melhor animação, O Menino e a Garça estreia no Brasil em breve">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://t.ctcdn.com.br/vvuJJ1OOsempM6-TBv634mZqztE=/1024x576/smart/i843413.jpeg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://stationcoffee.miolly.tech" />
    <meta property="twitter:title" content="">
        <meta name="theme-color" content="#f836b7" />
    <meta property="twitter:description" content="descrição..."/>
    <meta property="twitter:image" content="https://t.ctcdn.com.br/vvuJJ1OOsempM6-TBv634mZqztE=/1024x576/smart/i843413.jpeg" />
    
    <!-- Meta tags FIM -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Station Coffee</title>
    
    <style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Manrope', sans-serif;
    }
    
    :root{
        --bg-color: #160012;
        --text-color: #ffffff;
        --main-color: #f53fa1;
        --other-color: #f53fa1;
        --h1-font: 4.7rem;
    }
    
    *::selection{
        color: #fff;
        background: var(--main-color);
    }
    
        
        body{
            background: var(--bg-color);
            color: var(--text-color);
    }
        
        header {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            z-index: 1000;
            padding: 30px 12%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: transparent;
            transition: all ease .55s;
            }
        
    .navlist{
        display: flex;
    }
        
        .navlist a{
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color);
        margin: 0 30px;
        transition: all ease .55s;
    }
        
        .navlist a:hover{
         color: var(--other-color)
    }
        
    .logo img{
        width: 100%;
        height: auto;
    }
    
        .h-right{ 
        display: flex;
        align-items: center;
                }
        .h-right a{
        margin-right: 30px;
        font-size: 17px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--other-color);
        transition: all ease .55s;
         }
        
        .h-right a:hover{
        color: var(--text-color);
        }
    
        #menu-icon{
        font-size: 37px;
        color: var(--main-color);
        z-index: 10001;
        cursor: pointer;
        display: none;
    }
        
        section{
        padding: 0 12%;
    }
    
        .home{
        margin-left: 100px;
        position: relative;
        width: 1150px;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        background-size: cover;
        background-position: center;
        gap: 30px;
        overflow-x: hidden;
    }
    
    .home-img img{
        margin-top: -100px;
        width: 100%;
        height: auto;
    } 
        
    .home h1{
        font-size: var(--h1-font);
        font-weight: 800;
        Line-height: 1.3;
        margin: 22px 0;
        }
        
        .home-text p {
        width: 100%;
        max-width: 400px;
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color);
        line-height: 30px;
        margin-bottom: 20px;
        }
        
        .btn {
            display: inline-block;
            padding: 15px 22px;
            color: #4c1432;
            background: var(--other-color);
            border-radius: 25px;
            font-size: 16px;
            font-weight: 700;
            border: 1px solid transparent;
            word-spacing: 5px;
            transition: all ease .55s;
        }
        
        .btn:hover{
            background: #ffb8df;
        }
    
        .section2 {
            display: grid;
            background: #0a0005;
            padding: 50px 10%;
            grid-gap: 10px;
        }
        
    
        .heading {
            text-align: center;
            text-transform: uppercase;
        }
        
        .heading span {
            font-size: 1rem;
            font-weight: 600;
            color: var(--third-color)
        }
        
        .heading h1 {
            font-size: 2rem;
            color: var(--main-color);
            margin-bottom: 20px;
        }
    
        .materias{
           margin-top: 30px;
        }
    
    .post-collums {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-gap: 40px;
    }
    
    .posts-box {
        align-items: start;
        text-align: center;
    }
    
    .item-box img{
        width: 400px;
        height: 225px;
        object-fit: cover;
        border-radius: 20px;
    }
    
        .item-box{
            max-width: 450px;
            padding: 30px 10px;
            background: #1b0a0f;
            border-radius: 0.8rem;
            cursor: pointer;
            transition: all ease .50s;
        }
    
        .item-box h3{
            margin-top: 15px;
            color: var(--main-color);
        }
    
        .item-box p{
            margin-top: 15px;
            padding: 0px 30px;
        }
    
        .box-btn {
            margin-top: 15px;
            display: inline-block;
            padding: 1px 1px;
            color: #4c1432;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 700;
            word-spacing: 5px;
            transition: all ease .55s;
        }
    
        .banner img{
            width: 100%;
            height: 216px;
            object-fit: cover;
            margin-top: 90px;
            border-radius: 0.8rem;
            margin-left: -20px;
        }
    
        .titulo-post h1{
            margin-top: 20px;
            color: var(--main-color);
            font-size: 38px;
            font-weight: 800;
        }
    
        .time h1{
            margin-top: 15px;
            color: #574850;
        }
    
        .texto-post p{
            font-size: 20px;
            margin-top: 30px;
        }
    
        .texto-post span{
            font-weight: 700;
            color: var(--main-color);
        }
    
        .texto-post a{
            text-decoration: underline;
            cursor: pointer;
            font-weight: 700;
            color: var(--main-color);
        }
    
        .texto-post ol{
            margin-top: 20px;
        }
    
        .texto-post li{
            margin-left: 20px;
            margin-top: 10px;
            list-style-type: disc;
            font-size: 20px;
        }
    
        .img-post {
            margin-top: 30px;
            width: 100%;
            border-radius: 20px;
        }
    
        hr {
        margin-top: 30px;
        border-top: 3px solid #85616a;
      }
    
      .redator{
        margin-bottom: 30px;
        margin-left: 30px;
        display: flex;
        align-items: center;
      }
    
      .userft{
        border-radius: 100%;
        margin-top: 20px;
        width: 15%;
        border: 3px solid var(--main-color);
      }
    
      .texto-redator p{
        margin-left: 30px;
        color: var(--main-color);
        font-weight: 800;
        font-size: 25px;
      }
    
      .texto-redator h1{
        margin-left: 30px;
        font-size: 20px;
        font-weight: 300;
      }
    
      footer{
        margin-top: 30px;
        margin-bottom: 30px;
        align-items: center;
        text-align: center;
      }
    
      footer img{
        margin-bottom: 20px;
      }
    
      .tos-titulo h1{
        margin-top: 100px;
        color: var(--main-color);
        font-size: 38px;
        font-weight: 800;
    }
    
    .sobrenos{
        margin-top: 150px;
        align-items: center;
        text-align: center;
    }
    
    .sobrenos h1{
        color: var(--main-color);
        font-size: 38px;
        font-weight: 800;
    }
    
    .sobrenos p{
        margin-top: 20px;
        margin-bottom: 50px;
    }
    
    .equipe-colum{
        display: flex;
        gap: 30px;
    
    }
    
    .user{
        background: #0f0109;;
        border-radius: 0.8rem;
        padding: 20px;
    }
    
    .user img{
        margin-top: 20px;
        width: 120px;
        border-radius: 100%;
    }
    
    .user h1{
        font-size: 25px;
    }
    
    .user p{
        margin-top: 10px;
    }
    
    .obrigado {
        margin-top: 260px;
        align-items: center;
        text-align: center;
    }
    
    .obrigado h1{
        color: var(--main-color);
        font-size: 30px;
        margin-bottom: 10px;
    }
    
    .obrigado p{
        margin-bottom: 20px;
    }
      
    .form-titulo h1{
        margin-top: 30px;
        margin-bottom: 30px;
        color: var(--main-color);
        font-size: 38px;
        font-weight: 800;
    }
    
    .video {
        margin-top: 30px;
        width: 100%;
        height: 500px
    }
    
    section form{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
    form label{
        color: #f5f5f5;
        font-size: 17px;
        margin-bottom: 4px;
    }
    form input{
        padding: 15px;
        outline: none;
        border: 0;
        margin-bottom: 20px;
        font-size: 15px;
        transition: all 0.5s;
    }
    form textarea{
        padding: 10px;
        outline: none;
        border: 0;
        font-size: 15px;
        margin-bottom: 30px;
        transition: all 0.5s;
    }
    form button{
        padding: 15px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        background: transparent;
        border: 2px solid var(--main-color);
        color: var(--main-color);
        transition: all 1s;
        margin-bottom: 20px;
    }
    form button:hover{
        color: var(--third-color);
        background: var(--main-color);
        border-radius: 16px;
    }
    </style>
    
    <link rel="stylesheet" type="text/css" href="../style.css">
        <link rel="icon" type="image/ico" href="../img/logo.ico" />
    
    <!---- box icons link--->
    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <!---- remix icons link--->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/ remixicon.css" rel="stylesheet">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2? family=Manrope:wght@200;300;400;500;60037003800&display=swap" rel=" stylesheet">
    
    </head>
    <body>
    
    <section>`;


    novoHtml +=`<div class="banner">
    <img src="`+banner+`">
        </div>`;

    novoHtml += `        <div class="titulo-post">
            <h1>`+titulo+`</h1>
        </div>`;

    novoHtml += `       <div class="texto-post"> <p><span>`+subtitulo+`</span></p>`;

    novoHtml += "<p>" + texto + "</p></div>";




    novoHtml += `</section>

    <footer>
        <p>© 2024 - Todas as imagens de animes, jogos, mangás e etc pertence aos seus respectivos proprietários.</p>
    </footer>
    
    
        <!--- js link--->
        <script src="script.js"></script>
    
    </body>
    </html>`;





    var blob = new Blob([novoHtml], {type: "text/html;charset=utf-8"});
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "novo_arquivo.html";
    link.click();
});