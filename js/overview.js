
// Function to calculate BMI
function calculateBMI() {
    var weight = parseFloat(document.getElementById("Weight").value);
    var height = parseFloat(document.getElementById("Height").value);
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    return bmi;
}
function btnbreakfast(){
    document.getElementById('breakfast').innerHTML = `*Overnight oats with berries and nuts*<br>
    ½ cup old fashioned oats
-½ cup oat milk (or milk of your choice)
=¼ cup yogurt of your choice
=1 tablespoon honey or maple syrup (optional)
=Handful of fresh berries 
=Handful of chopped nuts` ;
    document.getElementById('breakfastimg').innerHTML = `<img src="images'meals/be63e50045053627aa05667c2a6fe52d3dd974b4.webp" class="img-fluid rounded" alt="...">`;
}
function btnsnak(){
    document.getElementById('snack').innerHTML = `*Cottage cheese with fruit*<br>
    1/2 CUP fat-free cottage cheese

=1/4 CUP strawberries or fruit of choice

=1/4 CUP blueberries or fruit of choice

=1/4 CUP raspberries or blackberries, or both

=1 TSP honey

=1 TSP chia seeds

Optional: 1/2 TSP freshly squeezed lemon`;
    document.getElementById('snackimg').innerHTML  = `<img src="images'meals/10-scaled.webp" class="img-fluid rounded" alt="..."> `
}
function btnlunch(){
    document.getElementById('lunch').innerHTML = `*Lentil soup with whole wheat bread*<br>2 cups lentils
    1 tablespoon extra virgin olive oil
    =2 carrots, peeled and chopped
    =2 celery ribs, thinly sliced
    =½ yellow onion, diced
    =8 ounces cremini mushrooms, thinly sliced
    =2 garlic cloves, minced
    =1 ½ cups packed laciento kale, roughly chopped
    =1 teaspoon herbs de provence or Italian seasoning`
    document.getElementById('lunchimg').innerHTML =` <img src="images'meals/vegan-lentil-stew-0b016185b40446ba98409c75dfeaef7f.jpg" class="img-fluid rounded h-75 w-100" alt="...">`
}
function btndinar(){
    document.getElementById('dinner').innerHTML = `*Vegetarian chili with cornbread*<br>
    1 tablespoon olive oil
-1 medium onion chopped
-2 bay leaves
-1 teaspoon ground cumin
-2 tablespoons dried oregano
-1 tablespoon salt
-2 stalks celery chopped
-2 green bell peppers chopped
-2 jalapeno peppers chopped
-3 cloves garlic chopped
-2 4 ounce cans chopped green chile peppers, drained
-1 15 ounce can diced tomatoes
-1 15 ounce can crushed tomatoes
-1 10 oz can tomatoes and chiles
-1/4 cup chili powder
-1 tablespoon ground black pepper
-2 15 ounce cans kidney beans, drained
-1 15 ounce can pinto beans, drained
-1 15 ounce can spicy black beans
-7 ounces 1/2 can white beans, drained
-1 cup whole kernel corn`
    document.getElementById('dinnerimg').innerHTML = `<img src="images'meals/dscf3378.jpg"  class="img-fluid rounded" alt="...">` 
}

//Function to calculate calories
function calculatecalori(h,w,a,gender,bmi){
    if(gender == "Male"){
        var suggestedCalorisM = (10 * w) + (6.25 * h) - (5 * a) + 5;
        var fatPercentageM =(1.20*bmi)-(0.23*a)-(10.8*1)-5.4;
        var LBMm = (0.407*w) + (0.267*h) - 19.2; 
        var TBWm = 2.447-(0.09516*a)+(0.1074*h)+(0.3362*w);
        var MuscleM =  LBMm*0.6;
        if(suggestedCalorisM<=1500){
            suggestedCalorisM = 1500;
            document.querySelector('.calori').innerHTML=`${suggestedCalorisM}`;
            document.querySelector('.breakfast').innerHTML=`*Scrambled Eggs with Veggies*<br>
            2 large eggs scrambled 
            , 1 cup spinach cooked
            , 1/2 cup cherry tomatoes halved
            , 1 tsp olive oil (for cooking)
            , 1 slice whole-grain toast`;
            document.querySelector('.snack').innerHTML=`Greek Yogurt with Berries and Nuts<br> 
            1 cup non-fat Greek yogurt ,1/2 cup mixed berries (strawberries, blueberries, raspberries)
            1 tbsp almonds, chopped`;
            document.querySelector('.snackimg').innerHTML=`<img src="images'meals/20230919180123-greek-20yogurt-20parfait.webp" class="img-fluid rounded h-75 w-100" alt="...">`
            document.querySelector('.lunch').innerHTML=`Chicken and Quinoa Salad<br>
            3 oz grilled chicken breast ,1/2 cup cooked quinoa ,1 cup mixed greens (spinach, arugula, kale) , 1/4 cup cucumber, sliced 1/4 cup cherry tomatoes, halved ,1 tbsp olive oil and lemon juice dressing`;
            document.querySelector('.dinner').innerHTML=`Salmon with Roasted Vegetables<br>
            4 oz baked salmon ,1 cup roasted broccoli ,1/2 cup roasted sweet potato ,1 tsp olive oil (for roasting vegetables)`;
            document.querySelector('.protine').innerHTML=`${MuscleM.toFixed(2)}`;
            document.querySelector('.carb').innerHTML=`${TBWm.toFixed(2)}`;
            document.querySelector('.fat').innerHTML=`${fatPercentageM.toFixed(2)}`;
        }else if(suggestedCalorisM>1500 && suggestedCalorisM<=2500){
            suggestedCalorisM = 2000;
            document.getElementById('calori').innerHTML=`${suggestedCalorisM}`;
            document.getElementById('breakfast').innerHTML=`*Veggie Omelette with Toast*<br>
            - 3 large eggs, beaten - 1/2 cup bell peppers, diced - 1/4 cup onions, diced - 1/4 cup mushrooms, sliced - 1 tsp olive oil (for cooking) - 1 slice whole-grain toast - 1 small orange`;
            document.getElementById('breakfastimg').innerHTML=` <img src="images'meals/48983161312_d4cdbe4f75_b.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('snack').innerHTML=`*Smoothie*<br>
            - 1 cup unsweetened almond milk
            - 1/2 banana
            - 1/2 cup frozen berries (strawberries, blueberries)
            - 1 tbsp almond butter
            - 1 tbsp chia seeds`;
            document.getElementById('snackimg').innerHTML=`<img src="images'meals/strawberry-blueberry-banana-smoothie-pic-4-683x1024.jpg"  class="img-fluid rounded h-50 w-100" alt="...">`;
            document.getElementById('lunch').innerHTML=`*Grilled Chicken Salad*<br>
            - 4 oz grilled chicken breast
            - 2 cups mixed greens (spinach, arugula, kale)
            - 1/2 cup cherry tomatoes, halved
            - 1/4 cup cucumber, sliced
            - 1/4 avocado, sliced
            - 1 tbsp olive oil and balsamic vinegar dressing
            - 1 small whole-grain roll`;
            document.getElementById('lunchimg').innerHTML=`<img src="images'meals/ID01263HERO_GrilledChickenSalad_012-aa3ccb3bb116828c376edf743879bbaf.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('dinner').innerHTML=`*Beef Stir-Fry with Quinoa*<br>
            - 4 oz lean beef strips
            - 1 cup mixed vegetables (broccoli, bell peppers, snap peas)
            - 1/2 cup cooked quinoa
            - 1 tbsp soy sauce
            - 1 tsp sesame oil (for cooking)`;
            document.getElementById('dinnerimg').innerHTML=`<img src="images'meals/p2rosda8eyti84hdx93u.jpeg" class="img-fluid rounded" alt="">`;
            document.getElementById('protine').innerHTML=`${MuscleM.toFixed(2)}`;
            document.getElementById('carb').innerHTML=`${TBWm.toFixed(2)}`;
            document.getElementById('fat').innerHTML=`${fatPercentageM.toFixed(2)}`;
        }else if(suggestedCalorisM>2500 && suggestedCalorisM<=3000){
            suggestedCalorisM = 2500;
            document.getElementById('calori').innerHTML=`${suggestedCalorisM}`;
            document.getElementById('breakfast').innerHTML=`*Avocado Toast with Eggs*<br>
            - 2 slices whole-grain toast
            - 1/2 avocado, mashed
            - 2 large eggs, poached or scrambled
            - 1 small orange`;
            document.getElementById('breakfastimg').innerHTML=` <img src="images'meals/Avocado-Toast-Recipe-1200.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('snack').innerHTML=`*Smoothie*<br>
            - 1 cup unsweetened almond milk
            - 1 banana
            - 1 cup spinach
            - 1/2 cup frozen mixed berries
            - 1 tbsp almond butter
            - 1 tbsp chia seeds`;
            document.getElementById('snackimg').innerHTML=`<img src="images'meals/strawberry-blueberry-banana-smoothie-pic-4-683x1024.jpg"  class="img-fluid rounded h-50 w-100" alt="...">`;
            document.getElementById('lunch').innerHTML=`*Chicken Quinoa Bowl*<br>
            - 4 oz grilled chicken breast
            - 1 cup cooked quinoa
            - 1 cup mixed greens (spinach, kale, arugula)
            - 1/2 cup cherry tomatoes, halved
            - 1/4 avocado, sliced
            - 2 tbsp olive oil and lemon juice dressing`;
            document.getElementById('lunchimg').innerHTML=``;
            document.getElementById('dinner').innerHTML=`*Beef and Vegetable Stir-Fry*<br>
            - 5 oz lean beef strips
            - 1 cup broccoli florets
            - 1/2 cup bell pepper, sliced
            - 1/2 cup snap peas
            - 1/2 cup carrots, sliced
            - 1 tbsp soy sauce
            - 1 tsp sesame oil (for cooking)
            - 1 cup cooked brown rice`;
            document.getElementById('dinnerimg').innerHTML=`<img src="images'meals/beef_stir_fry_and_vegetable_800x800.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('protine').innerHTML=`${MuscleM.toFixed(2)}`;
            document.getElementById('carb').innerHTML=`${TBWm.toFixed(2)}`;
            document.getElementById('fat').innerHTML=`${fatPercentageM.toFixed(2)}`;
        }else if(suggestedCalorisM>3000){
            suggestedCalorisM = 3000;
            document.getElementById('calori').innerHTML=`${suggestedCalorisM}`;
            document.getElementById('breakfast').innerHTML=` *Oatmeal with Nuts and Fruit*<br>
            - 1 cup rolled oats, cooked in water or milk
            - 1 banana, sliced
            - 1/4 cup blueberries
            - 2 tbsp almond butter
            - 2 tbsp chopped walnuts
            - 1 tsp honey`;
            document.getElementById('breakfastimg').innerHTML=`<img src="images'meals/Fruit_and_Nut_Oatmeal_HD-1_HD1280.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('snack').innerHTML=`*Protein Smoothie*<br>
            - 1 cup unsweetened almond milk
            - 1 banana
            - 1 cup spinach
            - 1/2 cup frozen mixed berries
            - 1 scoop protein powder
            - 2 tbsp peanut butter`;
            document.getElementById('snackimg').innerHTML=`<img src="images'meals/snickers-protein-smoothie-hero.webp" class="img-fluid rounded h-50 w-100" alt="...">`;
            document.getElementById('lunch').innerHTML=`*Chicken Burrito Bowl*<br>
            - 1 cup cooked brown rice
            - 4 oz grilled chicken breast
            - 1/2 cup black beans
            - 1/4 cup corn
            - 1/4 avocado, diced
            - 1/4 cup shredded cheese
            - 1/4 cup salsa
            - 2 tbsp sour cream
            - 1 cup mixed greens (lettuce, spinach)`;
            document.getElementById('lunchimg').innerHTML=`<img src="images'meals/chicken-burrito-bowls-8.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('dinner').innerHTML=`*Steak with Quinoa and Vegetables*<br>
            - 8 oz grilled steak
            - 1 cup cooked quinoa
            - 1 cup roasted Brussels sprouts
            - 1 cup roasted sweet potatoes
            - 1 tbsp olive oil (for roasting vegetables)`;
            document.getElementById('dinnerimg').innerHTML=`<img src="images'meals/download.jpeg" class="img-fluid rounded" alt="...">`;
            document.getElementById('protine').innerHTML=`${MuscleM.toFixed(2)}`;
            document.getElementById('carb').innerHTML=`${TBWm.toFixed(2)}`;
            document.getElementById('fat').innerHTML=`${fatPercentageM.toFixed(2)}`;
        }
        

    }else if(gender == "Female"){
        var suggestedCalorisF = (10 * w) + (6.25 * h) - (5 * a) - 5;
        var fatPercentageF =(1.20*bmi)-(0.23*a)-(10.8*0)-5.4;
        var LBMf = (0.252*w) + (0.473*h) - 48.3; 
        var TBWf = -2.097+(0.1069*h)+(0.2466*w);
        var Musclef =  LBMf*0.5;
        if(suggestedCalorisF<=1500){
            suggestedCalorisF = 1500;
            document.getElementById('calori').innerHTML=`${suggestedCalorisF}`;
            document.getElementById('breakfast').innerHTML=`Scrambled Eggs with Veggies<br>
            2 large eggs scrambled , 1 cup spinach cooked , 1/2 cup cherry tomatoes halved , 1 tsp olive oil (for cooking) , 1 slice whole-grain toast`;
            document.getElementById('snack').innerHTML=`Greek Yogurt with Berries and Nuts<br> 
            1 cup non-fat Greek yogurt ,1/2 cup mixed berries (strawberries, blueberries, raspberries) 1 tbsp almonds, chopped`;
            document.getElementById('snackimg').innerHTML=`<img src="images'meals/20230919180123-greek-20yogurt-20parfait.webp" class="img-fluid rounded" alt="...">`
            document.getElementById('lunch').innerHTML=`Chicken and Quinoa Salad<br>
            3 oz grilled chicken breast ,1/2 cup cooked quinoa ,1 cup mixed greens (spinach, arugula, kale) , 1/4 cup cucumber, sliced 1/4 cup cherry tomatoes, halved ,1 tbsp olive oil and lemon juice dressing`;
            document.getElementById('dinner').innerHTML=`Salmon with Roasted Vegetables<br>
            4 oz baked salmon ,1 cup roasted broccoli ,1/2 cup roasted sweet potato ,1 tsp olive oil (for roasting vegetables)`;
            document.getElementById('protine').innerHTML=`${Musclef.toFixed(2)}`;
            document.getElementById('carb').innerHTML=`${TBWf.toFixed(2)}`;
            document.getElementById('fat').innerHTML=`${fatPercentageF.toFixed(2)}`;
        }else if(suggestedCalorisF>1500 && suggestedCalorisF<=2500){
            suggestedCalorisF = 2000;
            document.getElementById('calori').innerHTML=`${suggestedCalorisM}`;
            document.getElementById('breakfast').innerHTML=`*Veggie Omelette with Toast*<br>
            - 3 large eggs, beaten - 1/2 cup bell peppers, diced - 1/4 cup onions, diced - 1/4 cup mushrooms, sliced - 1 tsp olive oil (for cooking) - 1 slice whole-grain toast - 1 small orange`;
            document.getElementById('breakfastimg').innerHTML=` <img src="images'meals/48983161312_d4cdbe4f75_b.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('snack').innerHTML=`*Smoothie*<br>
            - 1 cup unsweetened almond milk
            - 1/2 banana
            - 1/2 cup frozen berries (strawberries, blueberries)
            - 1 tbsp almond butter
            - 1 tbsp chia seeds`;
            document.getElementById('snackimg').innerHTML=`<img src="images'meals/strawberry-blueberry-banana-smoothie-pic-4-683x1024.jpg"  class="img-fluid rounded h-50 w-100" alt="...">`;
            document.getElementById('lunch').innerHTML=`*Grilled Chicken Salad*<br>
            - 4 oz grilled chicken breast
            - 2 cups mixed greens (spinach, arugula, kale)
            - 1/2 cup cherry tomatoes, halved
            - 1/4 cup cucumber, sliced
            - 1/4 avocado, sliced
            - 1 tbsp olive oil and balsamic vinegar dressing
            - 1 small whole-grain roll`;
            document.getElementById('lunchimg').innerHTML=`<img src="images'meals/ID01263HERO_GrilledChickenSalad_012-aa3ccb3bb116828c376edf743879bbaf.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('dinner').innerHTML=`*Beef Stir-Fry with Quinoa*<br>
            - 4 oz lean beef strips
            - 1 cup mixed vegetables (broccoli, bell peppers, snap peas)
            - 1/2 cup cooked quinoa
            - 1 tbsp soy sauce
            - 1 tsp sesame oil (for cooking)`;
            document.getElementById('dinnerimg').innerHTML=`<img src="images'meals/p2rosda8eyti84hdx93u.jpeg" class="img-fluid rounded" alt="...">`;
            document.getElementById('protine').innerHTML=`${Musclef.toFixed(2)}`;
            document.getElementById('carb').innerHTML=`${TBWf.toFixed(2)}`;
            document.getElementById('fat').innerHTML=`${fatPercentageF.toFixed(2)}`;
        }else if(suggestedCalorisF>2500 && suggestedCalorisF<=3000){
            suggestedCalorisF = 2500;
            document.getElementById('calori').innerHTML=`${suggestedCalorisM}`;
            document.getElementById('breakfast').innerHTML=`*Avocado Toast with Eggs*<br>
            - 2 slices whole-grain toast
            - 1/2 avocado, mashed
            - 2 large eggs, poached or scrambled
            - 1 small orange`;
            document.getElementById('breakfastimg').innerHTML=` <img src="images'meals/Avocado-Toast-Recipe-1200.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('snack').innerHTML=`*Smoothie*<br>
            - 1 cup unsweetened almond milk
            - 1 banana
            - 1 cup spinach
            - 1/2 cup frozen mixed berries
            - 1 tbsp almond butter
            - 1 tbsp chia seeds`;
            document.getElementById('snackimg').innerHTML=`<img src="images'meals/strawberry-blueberry-banana-smoothie-pic-4-683x1024.jpg"  class="img-fluid rounded h-50 w-100" alt="...">`;
            document.getElementById('lunch').innerHTML=`*Chicken Quinoa Bowl*<br>
            - 4 oz grilled chicken breast
            - 1 cup cooked quinoa
            - 1 cup mixed greens (spinach, kale, arugula)
            - 1/2 cup cherry tomatoes, halved
            - 1/4 avocado, sliced
            - 2 tbsp olive oil and lemon juice dressing`;
            document.getElementById('lunchimg').innerHTML=``;
            document.getElementById('dinner').innerHTML=`*Beef and Vegetable Stir-Fry*<br>
            - 5 oz lean beef strips
            - 1 cup broccoli florets
            - 1/2 cup bell pepper, sliced
            - 1/2 cup snap peas
            - 1/2 cup carrots, sliced
            - 1 tbsp soy sauce
            - 1 tsp sesame oil (for cooking)
            - 1 cup cooked brown rice`;
            document.getElementById('dinnerimg').innerHTML=`<img src="images'meals/beef_stir_fry_and_vegetable_800x800.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('protine').innerHTML=`${Musclef.toFixed(2)}`;
            document.getElementById('carb').innerHTML=`${TBWf.toFixed(2)}`;
            document.getElementById('fat').innerHTML=`${fatPercentageF.toFixed(2)}`;
        }else if(suggestedCalorisF>3000){
            suggestedCalorisF = 3000;
            document.getElementById('calori').innerHTML=`${suggestedCalorisM}`;
            document.getElementById('breakfast').innerHTML=` *Oatmeal with Nuts and Fruit*<br>
            - 1 cup rolled oats, cooked in water or milk
            - 1 banana, sliced
            - 1/4 cup blueberries
            - 2 tbsp almond butter
            - 2 tbsp chopped walnuts
            - 1 tsp honey`;
            document.getElementById('breakfastimg').innerHTML=`<img src="images'meals/Fruit_and_Nut_Oatmeal_HD-1_HD1280.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('snack').innerHTML=`*Protein Smoothie*<br>
            - 1 cup unsweetened almond milk
            - 1 banana
            - 1 cup spinach
            - 1/2 cup frozen mixed berries
            - 1 scoop protein powder
            - 2 tbsp peanut butter`;
            document.getElementById('snackimg').innerHTML=`<img src="images'meals/snickers-protein-smoothie-hero.webp" class="img-fluid rounded h-50 w-100" alt="...">`;
            document.getElementById('lunch').innerHTML=`*Chicken Burrito Bowl*<br>
            - 1 cup cooked brown rice
            - 4 oz grilled chicken breast
            - 1/2 cup black beans
            - 1/4 cup corn
            - 1/4 avocado, diced
            - 1/4 cup shredded cheese
            - 1/4 cup salsa
            - 2 tbsp sour cream
            - 1 cup mixed greens (lettuce, spinach)`;
            document.getElementById('lunchimg').innerHTML=`<img src="images'meals/chicken-burrito-bowls-8.jpg" class="img-fluid rounded" alt="...">`;
            document.getElementById('dinner').innerHTML=`*Steak with Quinoa and Vegetables*<br>
            - 8 oz grilled steak
            - 1 cup cooked quinoa
            - 1 cup roasted Brussels sprouts
            - 1 cup roasted sweet potatoes
            - 1 tbsp olive oil (for roasting vegetables)`;
            document.getElementById('dinnerimg').innerHTML=`<img src="images'meals/download.jpeg" class="img-fluid rounded" alt="...">`;
            document.getElementById('protine').innerHTML=`${Musclef.toFixed(2)}`;
            document.getElementById('carb').innerHTML=`${TBWf.toFixed(2)}`;
            document.getElementById('fat').innerHTML=`${fatPercentageF.toFixed(2)}`;
        }
        
    }
}

// Function to get selected medical conditions
function getSelectedGender() {
    var selectedGender = null;
    var femaleRadio = document.getElementById('flexRadioDefaultfemale');
    var maleRadio = document.getElementById('flexRadioDefaultmale');
    
    if (femaleRadio.checked) {
        selectedGender = "Female";
    } else if (maleRadio.checked) {
        selectedGender = "Male";
    }
    
    return selectedGender;
}

// sleep
function sleep(a) {
    var sleep = document.getElementById("sleeptime");
    var wake = document.getElementById("waketime");
    var HoureS = document.getElementById("houresleep");
    var HoureW = document.getElementById("hourewake");
    if (a <= 5) {
        sleep.innerHTML = `7:00 PM - 9:00 PM`;
        wake.innerHTML = `6:30 AM - 8:30 AM`;
        HoureS.innerHTML = `13h`;
        HoureW.innerHTML = `11h`;
    } else if (a > 5 && a <= 13) {
        sleep.innerHTML = `8:15 PM - 9:45 PM`;
        wake.innerHTML = `6:15 AM - 7:00 AM`;
        HoureS.innerHTML = `10h`;
        HoureW.innerHTML = `14h`;
    } else if (a > 13 && a <= 18) {
        sleep.innerHTML = `9:00 PM - 10:30 PM`;
        wake.innerHTML = `5:00 AM - 7:00 AM`;
        HoureS.innerHTML = `9h`;
        HoureW.innerHTML = `15h`;
    } else if (a > 18 && a <= 30) {
        sleep.innerHTML = `9:00 PM - 12:00 AM`;
        wake.innerHTML = `5:00 AM - 8:00 AM`;
        HoureS.innerHTML = `8h`;
        HoureW.innerHTML = `16h`;
    } else if (a > 30 && a <= 60) {
        sleep.innerHTML = `9:00 PM - 11:00 PM`;
        wake.innerHTML = `4:00 AM - 6:00 AM`;
        HoureS.innerHTML = `7h`;
        HoureW.innerHTML = `17h`;
    }
}
// Function to handle form submission
function handleSubmit() {
    var bmi = calculateBMI();
    var weight = parseFloat(document.getElementById("Weight").value);
    var height = parseFloat(document.getElementById("Height").value);
    var age = parseInt(document.getElementById("Age").value);
    var medicalConditions =getSelectedGender();

    // Prepare data to pass to overview.html
    var data = {
        bmi: bmi,
        weight:weight,
        height:height,
        age: age,
        medicalConditions: medicalConditions
    };

    // Convert data to JSON and redirect to overview.html
    var jsonData = JSON.stringify(data);
    localStorage.setItem("overviewData", jsonData); // Store data in localStorage
    
}
function displayImage() {
    const base64Image = localStorage.getItem('savedImage');
    if (base64Image) {
        document.getElementById('displayImage').src = base64Image;
    }
}

window.onload = displayImage;

const storeddata = JSON.parse(localStorage.getItem('overviewData'));
calculatecalori(storeddata.height,storeddata.weight,storeddata.age,storeddata.medicalConditions,storeddata.bmi);


// console.log(storeddata.weight);
// console.log(storeddata.height);
// calculateCaloriesburned(storeddata.weight);

