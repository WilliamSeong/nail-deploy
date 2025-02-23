<script setup lang="ts" >

</script>

<template>

    <div class="home-fourth">
        <div class="card-container">
            <div class="card-row">
                <div class="card">
                    <div class="card-header">
                        <h1>Manicure</h1>
                    </div>
                    <div class="card-background">

                    </div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat expedita, architecto magni saepe ullam ducimus veniam ipsum itaque, nostrum, repellendus vitae unde velit quisquam. Recusandae repellendus maiores id officia, labore ipsam fuga natus quisquam sed tempora amet veniam! Ipsam, in facere libero voluptatem rem nulla voluptatum iste reprehenderit, voluptatibus facilis expedita fuga ipsa provident cum nisi, deleniti voluptate ea? Doloremque praesentium consequuntur vero iusto quidem dolorum, eaque ut et minus. Est ad tempore obcaecati ea odio earum nemo recusandae expedita nulla eum consequatur corporis laborum dignissimos doloremque ut porro, totam eligendi. Ullam libero repellendus doloremque aut adipisci consectetur mollitia. Veniam maiores consectetur est laborum nesciunt unde exercitationem assumenda quisquam quia repellendus tenetur quis debitis modi quaerat quas hic ea tempore sint praesentium corrupti in, harum odio illum. Amet, ipsum? Nihil iusto cupiditate, ab nam quibusdam aut eius magni quaerat ex eaque, id quas sit ipsa laboriosam, enim voluptatem magnam praesentium maxime blanditiis quidem assumenda placeat pariatur. Non quo sunt, debitis saepe molestias sint cupiditate voluptas atque fugit voluptate distinctio provident. Hic sed atque, delectus sequi ratione ipsa quos at obcaecati natus! Maxime excepturi aliquam ipsum quidem esse aliquid earum nobis! Dolore commodi dicta repellat maiores reiciendis provident, consequatur sed.</p>
                    </div>
                </div>

                <div class="card">

                    <div class="card-header">
                        <h1>Waxing</h1>
                    </div>
                    <div class="card-background"></div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, temporibus culpa. Praesentium, culpa consequatur numquam vel tempora nostrum tempore cupiditate quasi? Hic porro natus illum provident atque rerum, quaerat praesentium et suscipit necessitatibus accusamus ut iure sequi iusto enim sit nisi quod neque dolore perspiciatis unde. In, fuga hic inventore ex, deserunt quas natus nobis beatae quod tempora veniam vel et. Quas maxime aut quod ad velit iure eveniet earum quidem perspiciatis quia iste sed inventore illo corrupti, voluptas harum nemo animi, itaque cumque beatae ullam sequi consectetur neque? Dicta magni repellat atque et aut vel ratione veritatis! Ratione eum et cum, sunt odio quo, placeat quis aliquid tempora deserunt dolorum unde at impedit praesentium modi nesciunt, assumenda ipsa rerum repellendus minima! Corrupti ea, cumque fugiat consequuntur tenetur earum delectus neque dolor veritatis accusantium vel consequatur voluptatibus exercitationem maiores pariatur iure non dolores quibusdam et hic voluptates. Quasi nihil labore deleniti, modi natus assumenda autem, nemo cum magnam cumque libero veritatis mollitia rerum architecto excepturi sed vel, corporis accusantium! Iste animi ratione assumenda reprehenderit odio, nisi adipisci hic deleniti voluptates commodi explicabo minus iusto rerum. Sed nesciunt odit quae. Consequuntur perferendis rerum debitis dicta quam similique, eaque quo minus odio?</p>
                    </div>

                </div>

                <div class="card">

                    <div class="card-header">
                        <h1>Pedicure</h1>
                    </div>
                    <div class="card-background"></div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis alias, repellendus ex quo, quas nesciunt labore amet, consequuntur accusamus laudantium nisi error illum optio. Minus reprehenderit ratione rem incidunt, doloremque laborum, unde quidem corporis et nam consequuntur id veniam consequatur, enim expedita quisquam aspernatur voluptatum itaque vel similique dignissimos. Minima laboriosam velit nostrum neque, sapiente itaque voluptatem magni molestias totam, nesciunt, asperiores dolorem vel atque libero repellat suscipit sed? Quia illum iusto fugit voluptate ipsum, accusantium quasi vel obcaecati quae impedit, magni odit, autem sunt optio pariatur dignissimos. Repudiandae quo doloribus ipsam fugiat, reiciendis sunt expedita. Quia obcaecati eveniet maxime nisi, perspiciatis culpa inventore ad. Numquam rerum tempora alias voluptatem pariatur excepturi accusantium quae et harum quidem perferendis aliquid culpa mollitia id eos dolore, consectetur ab similique illo eum amet reprehenderit illum. Aperiam doloremque praesentium reprehenderit odio porro magni accusamus facere aut perspiciatis. Vitae ullam similique quo tenetur dicta optio reiciendis sunt quaerat blanditiis inventore accusantium saepe enim asperiores architecto adipisci distinctio, natus voluptate cupiditate voluptates et excepturi quas assumenda! Nulla voluptatem veniam veritatis in ullam! Facilis nemo rerum dignissimos enim in voluptatibus quibusdam placeat eos. Sed magni voluptas optio illo pariatur nihil, nostrum odit quam cumque distinctio expedita et.</p>
                    </div>

                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>

    .home-fourth{
        position: relative;
        width: 100%;
        height: 80vh;
        background: mintcream;
        display: flex;
    }

    .card-container{
        margin: auto;
        width: 50%;
        height: 70%;
    }

    .card-row{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;   
    }

    .card{
        height: 80%;
        width: 30%;
        border-radius: min(32px, 3vw);

        position: relative;

        transition: all 1000ms ease;
        
        display: flex;
        align-items: flex-end;
    }

    .card:hover{
        cursor: pointer;
        
        /* animation: shake 1000ms ease-in-out; */
    }

    /* @keyframes shake{
        25% { transform: rotate(2deg);}
        75% { transform : rotate(-2deg);}
    } */

    .card-header{
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: top 500ms ease, transform 500ms ease;
    }

    .card:hover .card-header{
        top: 3%;
        transform: translate(-50%, 0);
    }

    .card-background{
        width: 100%;
        height: 100%;
        border-radius: min(32px, 3vw);

        position: absolute;

        z-index: 0;

        background: var(--primary-color);
    }

    .card-content{
        width: 100%;
        height: 100%;
        border-radius: min(32px, 3vw);

        display: flex;
        z-index: 1;
        padding-top: 20%;

        background: url(https://picsum.photos/seed/4/2560/1440);
        opacity: 0;
        transition: 1000ms ease
    }

    .card:hover .card-content{
        opacity: 1;
    }
</style>