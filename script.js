function calculateBMI() {
    const weightInput = parseFloat(document.getElementById('weight').value);
    const heightInput = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;

    if (!weightInput || !heightInput || weightInput <= 0 || heightInput <= 0) {
        alert('Please enter valid weight and height values');
        return;
    }

    // Convert weight to kg if in lbs
    let weight = weightInput;
    if (weightUnit === 'lbs') {
        weight = weightInput * 0.453592;
    }

    // Convert height to meters
    let height = heightInput;
    if (heightUnit === 'cm') {
        height = heightInput / 100;
    } else if (heightUnit === 'inches') {
        height = heightInput * 0.0254;
    }

    const bmi = weight / (height * height);
    const resultDiv = document.getElementById('result');
    let category, suggestion, color, foods, exercises;

    if (bmi < 18.5) {
        category = 'Underweight';
        suggestion = 'Suggestions to gain weight healthily:\n' +
            '• Eat more frequently throughout the day\n' +
            '• Include protein-rich foods in every meal\n' +
            '• Add healthy fats like nuts, avocados, and olive oil\n' +
            '• Consider strength training to build muscle';
        color = '#FFD700';
        foods = [
            'Nuts and nut butters',
            'Avocados',
            'Full-fat dairy products',
            'Lean meats',
            'Whole grain pasta',
            'Dried fruits',
            'Protein smoothies'
        ];
        exercises = [
            'Compound exercises (squats, deadlifts)',
            'Push-ups and pull-ups',
            'Bench press',
            'Resistance band training',
            'Progressive overload training'
        ];
    } else if (bmi < 25) {
        category = 'Normal weight';
        suggestion = 'Suggestions to maintain healthy weight:\n' +
            '• Continue balanced diet\n' +
            '• Regular exercise (150 minutes per week)\n' +
            '• Stay hydrated\n' +
            '• Get adequate sleep';
        color = '#90EE90';
        foods = [
            'Lean proteins (chicken, fish)',
            'Whole grains',
            'Fresh fruits and vegetables',
            'Low-fat dairy products',
            'Legumes and beans',
            'Nuts and seeds (in moderation)',
            'Healthy oils (olive, avocado)'
        ];
        exercises = [
            'Brisk walking (30 mins/day)',
            'Swimming',
            'Cycling',
            'Yoga or Pilates',
            'Mixed cardio and strength training'
        ];
    } else if (bmi < 30) {
        category = 'Overweight';
        suggestion = 'Suggestions to reach healthy weight:\n' +
            '• Reduce calorie intake moderately\n' +
            '• Increase physical activity\n' +
            '• Choose whole foods over processed foods\n' +
            '• Monitor portion sizes';
        color = '#FFA500';
        foods = [
            'Leafy greens',
            'Lean proteins (fish, chicken breast)',
            'High-fiber vegetables',
            'Greek yogurt',
            'Quinoa and other whole grains',
            'Berries',
            'Green tea'
        ];
        exercises = [
            'Brisk walking or jogging',
            'HIIT workouts (start gradually)',
            'Swimming',
            'Strength training',
            'Low-impact cardio'
        ];
    } else {
        category = 'Obese';
        suggestion = 'Suggestions to improve health:\n' +
            '• Consult with healthcare provider\n' +
            '• Start with gentle exercise like walking\n' +
            '• Focus on whole, nutrient-rich foods\n' +
            '• Consider keeping a food diary';
        color = '#FF6347';
        foods = [
            'Vegetables (fill half your plate)',
            'Lean proteins',
            'Whole grains (in moderation)',
            'Water-rich fruits',
            'Sugar-free beverages',
            'Low-fat dairy',
            'Healthy soups and broths'
        ];
        exercises = [
            'Walking (start with 10 mins)',
            'Water aerobics',
            'Stationary cycling',
            'Chair exercises',
            'Gentle stretching'
        ];
    }

    resultDiv.style.opacity = '0';
    resultDiv.style.display = 'block';
    
    resultDiv.style.backgroundColor = color;
    resultDiv.innerHTML = `
        <div class="suggestion">
            <div class="bmi-header">
                <h3>Your BMI: ${bmi.toFixed(1)}</h3>
                <p>Category: ${category}</p>
            </div>
            
            <div class="main-suggestions">
                <h4><i class="fas fa-lightbulb"></i> Recommendations:</h4>
                <p style="white-space: pre-line">${suggestion}</p>
            </div>
            
            <div class="food-recommendations">
                <h4><i class="fas fa-utensils"></i> Recommended Foods:</h4>
                <ul>
                    ${foods.map(food => `<li>${food}</li>`).join('')}
                </ul>
            </div>
            
            <div class="exercise-recommendations">
                <h4><i class="fas fa-running"></i> Recommended Exercises:</h4>
                <ul>
                    ${exercises.map(exercise => `<li>${exercise}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        resultDiv.style.opacity = '1';
    }, 50);
} 