import React from 'react';
import Footer from './Footer';

function Home() {
   return (
      <div>
         <section class="">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100 " src="Images/q4.png" alt="First slide" style={{ height: "800" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/q1.jpg" alt="Second slide" style={{ height: "800" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/q3.jpg" alt="Third slide" style={{ height: "800" }} />
                  </div>
               </div>
            </div>
         </section>

         <section class="bg-light" id="about">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4 text-secondary">Know About Us</h3>
                  </div>
               </div>
               <div class="row">
                  <p class="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                     like Aldus PageMakr including versions of Lorem Ipsum</p>
               </div>
            </div>
         </section>

         <section class="" id="destinations">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4 text-secondary">Major Centers</h3>
                  </div>
               </div>
               <div class="row">
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        <img class="card-img-top" src="Images/mumbai.jpg" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Mumbai</h4>
                           <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                        </div>
                        <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        <img class="card-img-top" src="Images/pune3.jpg" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Pune</h4>
                           <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                        </div>
                        <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        <img class="card-img-top" src="Images/h1.jpg" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Hyderabad</h4>
                           <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                        </div>
                        <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section class="" id="places">
            <div class="container">
               <div class="col-sm-12 col-md-12 mb-4">
                  <h3 class="text-center text-secondary mt-4">More About Us</h3>
               </div>
               <div class="accordion" id="accordionExample">
                  <div class="card">
                     <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Our Mission
                           </button>
                        </h2>
                     </div>

                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Our Goal
                           </button>
                        </h2>
                     </div>
                     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Our Centers
                           </button>
                        </h2>
                     </div>
                     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. &nbsp;
                           <a href="#" >Find Out More!</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section class="bg-light mt-5" id="tourist">
            <div class="container">
               <div class="row text-center">
                  <div class="col-sm-12 col-md-12 mb-4">
                     <h3 class="text-center mt-4 text-secondary">OTHERS SPEAK: <br/>Testimonials</h3>
                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
                        <h6 class="font-weight-bold blue-text my-3">Contributor</h6>
                        <p class="font-weight-normal dark-grey-text">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                           eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                     </div>
                  </div>

                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                        <h6 class="font-weight-bold blue-text my-3">Contributor</h6>
                        <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                           corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                     </div>

                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                        <h6 class="font-weight-bold blue-text my-3">Contributor</h6>
                        <p class="font-weight-normal dark-grey-text">
                           At vero eos et accusamus et iusto odio dignissimos ducimus qui
                           blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
      </div>
   );
}

export default Home;