// Dev
import {Users, PublicWorkouts, Characters, Items, Skins, Exercises, Workouts, Levels, Groups, Quests} from '/collections';

export default () => {
  let user = Users.findOne({username: 'gameout'});

  if(!user) {
    Users.remove({});
    Characters.remove({});
    Items.remove({});
    Skins.remove({});
    Exercises.remove({});
    Workouts.remove({});
    Levels.remove({});
    Groups.remove({});
    Quests.remove({});
    PublicWorkouts.remove({});

    Accounts.createUser({
      email: 'gameout@gameout.com',
      username: 'gameout',
      password: 'gameout'
    });
    user = Users.findOne({username: 'gameout'});

    const userId = user._id;

    const questId1 = Quests.insert({
      name: "Sir ButterHam",
      description: "Since the beginning of modern technology, the evil organization called CalorieCorp has ruled the world. Everybody stopped working out, and stayed home, playing on their smartphones and consoles. Every day, CalorieCorp is recruiting more and more warriors on their side. The current situation looks hopeless. But there is still hope. There are still a few warriors out there and they have only one goal: motivate people to stand up and work out! \n These warriors have decided to stop working from the shadows. They are members of the FitOrder. They believe that there is a warrior in every single person. A warrior who will not fall, who will stand up against weakness when they are hungry. A warrior who can become great and fit!\n  CalorieCorp has heard about the rebels from the FitOrder and they have decided to put Lord FatBelly in charge. His only goal is to demotivate every single person from working out, making them believe that they will never be fit and in shape. But he is not alone, his right hand, Sir ButterHam has pledged himself to his bidding with the promise that he would stop every single Warrior from becoming fit and strong. \n You are the one who can decide. You can prove them right and become one of them, big and ruler of the couch... or you can be a hero. A hero who will stop their attempt to rule the world and your thirst for junk food and sweets. The path of the Warrior is tough and noble, but at the end of that path, you will become one of the great Warriors, fit and in great shape! Get ready to have an adventure of your life, let's go! \n If you want to become a Warrior, first you have to face your first challenge. Defeat Sir ButterHam before he manages to succeed in his mission. \n Sir ButterHam: I see you think that you can be fit and strong. Don’t be fooled with such foolish idea. It is easier to relax on the couch. Join me, be big and happy! \n  You will stand against me, young Warrior? Okay, have it your way. Now you will experience the true nature of our Order. Eventually, you will fall to my influence... buahahah",
      boss: {
        name: "Sir ButterHam",
        maxHealth: 100,
        damage: 5
      },
      rewards: {
        experience: 100,
        gold: 20
      },
      questNumber: 1
    });
    
    const questId2 = Quests.insert({
      name: "Lord FatBelly",
      description: "Sir ButterHam has been defeated. His master is not satisfied with that result and he seeks revenge in order to stop your goal to become fit and in shape! You must stop him from his own madness, face him, face CalorieCorp! \n Lord FatBelly: I’ve been expecting you, my young fellow. Let us stop this nonsense, you don’t have to fight me. You can be part of our Order, one of our leaders. All you have to do is stop trying to get fit. It is that simple. Why would you do such things when you can enjoy cookies, chocolate, and pasta. If you decide to stand against me then you will see how weak you are. So, what will it be?",
      boss: {
        name: "Lord FatBelly",
        maxHealth: 200,
        damage: 10
      },
      rewards: {
        experience: 200,
        gold: 50
      },
      questNumber: 2
    });


    const groupId = Groups.insert({
      ownerId: userId,
      memberIds: [userId]
    });

    // All exercises for all packages at the moment

    /*
         Easy exercises men -> level 1
     */
    const exerciseLunges = Exercises.insert(
      {
        ownerId: userId,
        name: "Lunges men",
        gender:"male",
        level: "easy",
        description: "The lunge is a classic fitness exercise for the lower body, which helps the flexibility of the hips and hamstrings, and the strength of the buttocks, hamstrings and hip flexors.",
        link:"https://www.youtube.com/embed/ekkKhBLZnxc",
        unit: 10
      }
    );

    const exerciseSquats = Exercises.insert(
      {
        ownerId: userId,
        name: "Squats men",
        gender:"male",
        level: "easy",
      description: "Squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quadriceps, hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body." ,
        link: "https://www.youtube.com/embed/nEQQle9-0NA",
        unit: 15
      }
    );

    const exerciseCrunches = Exercises.insert(
      {
        ownerId: userId,
        name: "Crunches men",
        gender:"male",
        level: "easy",
        description: "The basic crunch is the consummate abdominal exercise in a strength-training program. Pay special attention to your form when you do crunches, especially if you have lower-back or neck problems",
        link: "https://www.youtube.com/embed/NIqgTCTd2MM",
        unit: 20
      }
    );

    const exerciseLayingLegRaises = Exercises.insert(
      {
        ownerId: userId,
        name: "Laying leg raises men",
        gender:"male",
        level: "easy",
        description: "Exercise is performed by laying on back with hands under glutes, raising your legs up and returning to start position with yout knees slightly bent.",
        link: "https://www.youtube.com/embed/l4kQd9eWclE",
        unit: 10
      }
    );

    const exerciseMountainClimbers = Exercises.insert(
        {
          ownerId: userId,
          name: "Mountain climbers men",
          gender:"male",
          level: "easy",
          description: "Place hands on floor, slightly wider than shoulder width. On forefeet, position one leg forward bent under body and extend other leg back.",
          link: "https://www.youtube.com/embed/fBZHkGT0W5Y",
          unit: 10
        }
    );


    const exerciseDipsOnChair = Exercises.insert(
        {
          ownerId: userId,
          name: "Dips on chair men",
          gender:"male",
          level: "easy",
          description: "The dip is an exercise used in strength training. Narrow, shoulder-width dips primarily train the triceps, with major synergists being the anterior deltoid, the pectoralis muscles and the rhomboid muscles of the back (in that order).",
          link: "https://www.youtube.com/embed/c3ZGl4pAwZ4",
          unit: 10
        }
    );

    /*
         Medium exercises men -> level 2
    */

    const exercisePushUps = Exercises.insert(
        {
          ownerId: userId,
          name: "Push ups men",
          gender:"male",
          level: "medium",
          description: "Exercise performed in a prone position by raising and lowering the body with the straightening and bending of the arms while keeping the back straight and supporting the body on the hands and toes.",
          link: "https://www.youtube.com/embed/Eh00_rniF8E",
          unit: 10
        }
    );

    const exerciseDips = Exercises.insert(
        {
          ownerId: userId,
          name: "Dips men",
          gender:"male",
          level: "medium",
          description: "The dip is an exercise used in strength training. Narrow, shoulder-width dips primarily train the triceps, with major synergists being the anterior deltoid, the pectoralis muscles and the rhomboid muscles of the back (in that order).",
          link: "https://www.youtube.com/embed/wjUmnZH528Y",
          unit: 10
        }
    );

    const exerciseSquatJumps = Exercises.insert(
        {
          ownerId: userId,
          name: "Squat jumps men",
          gender:"male",
          level: "medium",
          description: "Stand with your feet shoulder-width apart, arms hanging at your sides. Squat down until your knees are bent about 90 degrees. Immediately swing your arms overhead and jump upward as high as you can.",
          link: "https://www.youtube.com/embed/DeTBwEL4m7s",
          unit: 10
        }
    );


    /*
         Beginner workouts -> MALE WORKOUTS
    */

    const workoutHomeRoutineMen = Workouts.insert(
        {
            ownerId: userId,
            name: "Home routine",
            description: "Workout from home. Complete exercises in 4 cycles, rest between exercises is 60 seconds and rest between cycles is 120 seconds.",
            exerciseIds: [exerciseSquats, exercisePushUps, exerciseLunges, exerciseDipsOnChair]
        }
    );
    PublicWorkouts.insert({_id: workoutHomeRoutineMen});

    const workoutCoreRoutineMen = Workouts.insert(
        {
            ownerId: userId,
            name: "Core routine",
            description: "Excellent workout for core muscles. Complete exercises in 4 cycles, rest between exercises is 60 seconds and rest between cycles is 120 seconds.",
            exerciseIds: [exerciseCrunches, exerciseMountainClimbers, exerciseLayingLegRaises, exerciseSquatJumps]
        }
    );
    PublicWorkouts.insert({_id: workoutCoreRoutineMen});

    const workoutCantWalkMen = Workouts.insert(
        {
          ownerId: userId,
          name: "Can't walk",
          description: "Excellent workout for leg muscles.  Complete exercises in 5 cycles, rest between exercises is 50 seconds and rest between cycles is 100 seconds.",
          exerciseIds: [exerciseSquats, exerciseMountainClimbers, exerciseLunges, exerciseSquatJumps]
        }
    );
    PublicWorkouts.insert({_id: workoutCantWalkMen});

    /*
         Women version exercises
    */

    const exerciseSquatWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Squats women",
          gender: "female",
          level: "easy",
          description: "Squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quadriceps, hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body.",
          link:"https://www.youtube.com/watch?v=UXJrBgI2RxA",
          unit: 15
        }
    );

    const exercisePushUpWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Push ups women",
          gender: "female",
          level: "easy",
          description: "Push-up, targeting all the major muscle groups of the upper body, mostly the pecks, the chest muscles, the anterior delts, the front of your shoulder, and as you go through elbow flexion and extension, you're working your triceps.",
          link:"https://www.youtube.com/embed/Q7cPaJZoOng",
          unit: 10
        }
    );

    const exerciseBridgeSqueezeWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Bridge squeeze women",
          gender: "female",
          level: "medium",
          description: "The bridge exercise is a back bend, a core strengthener, and a balance pose all in one.",
          link:"https://www.youtube.com/embed/2-d8EplhKIM",
          unit: 12
        }
    );

    const exerciseMountainClimberWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Mountain climbers women",
          gender: "female",
          level: "easy",
          description: "Place hands on floor, slightly wider than shoulder width. On forefeet, position one leg forward bent under body and extend other leg back.",
          link:"https://www.youtube.com/embed/nmwgirgXLYM",
          unit: 10
        }
    );

    const exerciseLungeWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Lunges women",
          gender: "female",
          level: "easy",
          description: "The lunge is a classic fitness exercise for the lower body, which helps the flexibility of the hips and hamstrings, and the strength of the buttocks, hamstrings and hip flexors.",
          link:"https://www.youtube.com/embed/QF0BQS2W80k",
          unit: 10
        }
    );

    const exerciseJumpingJackWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Jumping jacks women",
          gender: "female",
          level: "easy",
          description: "Great exercises where your getting movement in your upper body, your getting movement in your lower body, its cardiovascular and you don't need any equipment.",
          link:"https://www.youtube.com/embed/UpH7rm0cYbM",
          unit: 15
        }
    );

    const exerciseRussianTwistWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Russian twists women",
          gender: "female",
          level: "medium",
          description: "Grab a medicine ball, dumbbell, or weight plate and sit on the floor with your hips and knees bent 90 degrees. Hold the weight straight out in front of you and keep your back straight. Explosively twist your torso as far as you can to the left, and then reverse the motion, twisting as far as you can to the right. That's one rep.",
          link:"https://www.youtube.com/embed/NeAtimSCxsY",
          unit: 20
        }
    );

    const exerciseBicycleCrunchWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Bicycle crunches women",
          gender: "female",
          level: "medium",
          description: "Lie on your back on a mat with knees bent, feet on the floor, and hands behind your head (dont clasp your fingers). Press your lower back into the mat and tighten your ab muscles as you lift your head, shoulders, and upper back off the floor and simultaneously move your right elbow and left knee toward each other while straightening your right leg (don't let it touch the ground).",
          link:"https://www.youtube.com/embed/Iwyvozckjak",
          unit: 15
        }
    );

    const exerciseBackExtensionWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Back extensions women",
          gender: "female",
          level: "easy",
          description: "Back extension is mostly going to mostly work the erector spine or erector spine muscle group which is the long muscles that run vertically and parallel to your spine and basically are the muscles that hold you up. It's really important to do back extension especially if you have a desk job and you're used to always being in this slumped over type of posture.",
          link:"https://www.youtube.com/embed/DDJtB8Zgyow",
          unit: 10
        }
    );

    const exerciseSquatJumpsWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Squat jumps women",
          gender: "female",
          level: "easy",
          description: "Stand with your feet shoulder-width apart, arms hanging at your sides. Squat down until your knees are bent about 90 degrees. Immediately swing your arms overhead and jump upward as high as you can.",
          link:"https://www.youtube.com/embed/U4s4mEQ5VqU",
          unit: 10
        }
    );

    /*
         Beginner workouts -> FEMALE WORKOUTS
    */

    const workoutHomeRoutineWomen = Workouts.insert(
        {
          ownerId: userId,
          name: "Home routine Women",
          description: "Workout from home. Complete exercises in 4 cycles, rest between exercises is 60 seconds and rest between cycles is 120 seconds.",
          exerciseIds: [exerciseBicycleCrunchWomen, exerciseBackExtensionWomen, exerciseSquatWomen, exerciseBridgeSqueezeWomen]
        }
    );
    PublicWorkouts.insert({_id: workoutHomeRoutineWomen});

    const workoutFullBodyRoutineWomen = Workouts.insert(
        {
          ownerId: userId,
          name: "Full body routine Women",
          description: "Excellent workout for core muscles. Complete exercises in 4 cycles, rest between exercises is 60 seconds and rest between cycles is 120 seconds.",
          exerciseIds: [exercisePushUpWomen, exerciseJumpingJackWomen, exerciseLungeWomen, exerciseRussianTwistWomen]
        }
    );
    PublicWorkouts.insert({_id: workoutFullBodyRoutineWomen});

    const workoutCantWalkWomen = Workouts.insert(
        {
          ownerId: userId,
          name: "Can't walk Women",
          description: "Excellent workout for leg muscles.  Complete exercises in 4 cycles, rest between exercises is 50 seconds and rest between cycles is 100 seconds.",
          exerciseIds: [exerciseSquatWomen, exerciseJumpingJackWomen, exerciseMountainClimberWomen, exerciseSquatJumpsWomen, exerciseLungeWomen]
        }
    );
    PublicWorkouts.insert({_id: workoutCantWalkWomen});


    /*
     SKINS
     */

    //set hair
    const hairId1 = Skins.insert(
      {
        type: "hair",
        name: "hair1",
        description: "hair one",
        set: 1
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair2",
        description: "hair two",
        set: 2
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair3",
        description: "hair three",
        set: 3
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair4",
        description: "hair four",
        set: 4
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair5",
        description: "hair five",
        set: 5
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair6",
        description: "hair six",
        set: 6
      }
    );

      Skins.insert(
      {
        type: "hair",
        name: "hair7",
        description: "hair seven",
        set: 7
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair8",
        description: "hair eight",
        set: 8
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair9",
        description: "hair nine",
        set: 9
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair10",
        description: "hair ten",
        set: 10
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair11",
        description: "hair eleven",
        set: 11
      }
    );

      Skins.insert(
      {
        type: "hair",
        name: "hair12",
        description: "hair twelve",
        set: 12
      }
    );

       Skins.insert(
      {
        type: "hair",
        name: "hair13",
        description: "hair thirteen",
        set: 13
      }
    );


    Skins.insert(
      {
        type: "hair",
        name: "hair14",
        description: "hair fourteen",
        set: 14
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair15",
        description: "hair fifteen",
        set: 15
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair16",
        description: "hair sixteen",
        set: 16
      }
    );


    Skins.insert(
      {
        type: "hair",
        name: "hair17",
        description: "hair seventeen",
        set: 17
      }
    );

    Skins.insert(
      {
        type: "hair",
        name: "hair18",
        description: "hair eighteen",
        set: 18
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair19",
        description: "hair nineteen",
        set: 19
      }
    );

      Skins.insert(
      {
        type: "hair",
        name: "hair20",
        description: "hair twenty",
        set: 20
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair21",
        description: "hair twentyone",
        set: 21
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair22",
        description: "hair twentytwo",
        set: 22
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair23",
        description: "hair twentythree",
        set: 23
      }
    );

      Skins.insert(
      {
        type: "hair",
        name: "hair24",
        description: "hair twentyfour",
        set: 24
      }
    );

     Skins.insert(
      {
        type: "hair",
        name: "hair25",
        description: "hair twentfive",
        set: 25
      }
    );


    //set torso
    const torsoId1 = Skins.insert(
      {
        type: "torso",
        name: "torso1",
        description: "torso one",
        set: 1
      }
    );

    Skins.insert(
      {
        type: "torso",
        name: "torso2",
        description: "torso two",
        set: 2
      }
    );

    Skins.insert(
      {
        type: "torso",
        name: "torso3",
        description: "torso three",
        set: 3
      }
    );

    Skins.insert(
      {
        type: "torso",
        name: "torso4",
        description: "torso four",
        set: 4
      }
    );

    Skins.insert(
      {
        type: "torso",
        name: "torso5",
        description: "torso five",
        set: 5
      }
    );


    //set legs
    const legsId1 = Skins.insert(
      {
        type: "legs",
        name: "legs1",
        description: "legs one",
        set: 1
      }
    );

    Skins.insert(
      {
        type: "legs",
        name: "legs2",
        description: "legs two",
        set: 2
      }
    );

    Skins.insert(
      {
        type: "legs",
        name: "legs3",
        description: "legs three",
        set: 3
      }
    );

    Skins.insert(
      {
        type: "legs",
        name: "legs4",
        description: "legs four",
        set: 4
      }
    );

    Skins.insert(
      {
        type: "legs",
        name: "legs5",
        description: "legs five",
        set: 5
      }
    );


    //set color
    const colorId1 = Skins.insert(
      {
        type: "color",
        name: "color1",
        description: "color one",
        set: 1
      }
    );

    Skins.insert(
      {
        type: "color",
        name: "color2",
        description: "color two",
        set: 2
      }
    );

    Skins.insert(
      {
        type: "color",
        name: "color3",
        description: "color three",
        set: 3
      }
    );

    Skins.insert(
      {
        type: "color",
        name: "color4",
        description: "color four",
        set: 4
      }
    );

    Skins.insert(
      {
        type: "color",
        name: "color5",
        description: "color five",
        set: 5
      }
    );

    /*
     ITEMS
     */

    //set 1
    const headId1 = Items.insert(
      {
        type: "head",
        name: "Helmet of the Initiatives",
        description: "Basic trainee helmet",
        price: 30,
        set: 1,
        stats: {
          strength: 1,
          stamina: 1,
          agility: 1,
          intelligence: 1
        }
      }
    );
    const chestId1 = Items.insert(
      {
        type: "chest",
        name: "Chest of the Initiatives",
        description: "Basic trainee helmet",
        price: 30,
        set: 1,
        stats: {
          strength: 1,
          stamina: 1,
          agility: 1,
          intelligence: 1
        }
      }
    );
    const leftHandId1 = Items.insert(
      {
        type: "leftHand",
        name: "Shield of Bravery",
        description: "Basic shield of trainee",
        price: 30,
        set: 1,
        stats: {
          strength: 1,
          stamina: 1,
          agility: 1,
          intelligence: 1
        }
      }
    );
    const rightHandId1 = Items.insert(
      {
        type: "rightHand",
        name: "Sword of Honor",
        description: "First weapon of the future Warrior",
        price: 30,
        set: 1,
        stats: {
          strength: 1,
          stamina: 1,
          agility: 1,
          intelligence: 1
        }
      }
    );


    //set2
    const headId2 = Items.insert(
      {
        type: "head",
        name: "Helmet of Bravery",
        description: "Keeps your head from enemy attacks.",
        price: 60,
        set: 2,
        stats: {
          strength: 2,
          stamina: 2,
          agility: 2,
          intelligence: 2
        }
      }
    );
    const chestId2 = Items.insert(
      {
        type: "chest",
        name: "Armor of the Kings",
        description: "Modern armor, gives agility.",
        price: 60,
        set: 2,
        stats: {
          strength: 2,
          stamina: 2,
          agility: 2,
          intelligence: 2
        }
      }
    );
    const leftHandId2 = Items.insert(
      {
        type: "leftHand",
        name: "Shield of Power",
        description: "Good defense is the best offense.",
        price: 60,
        set: 2,
        stats: {
          strength: 2,
          stamina: 2,
          agility: 2,
          intelligence: 2
        }
      }
    );
    const rightHandId2 = Items.insert(
      {
        type: "rightHand",
        name: "Sword of Power",
        description: "Whoever holds this sword has a great power!",
        price: 60,
        set: 2,
        stats: {
          strength: 2,
          stamina: 2,
          agility: 2,
          intelligence: 2
        }
      }
    );

    //set3
    const headId3 = Items.insert(
      {
        type: "head",
        name: "Helmet of Wisdom",
        description: "Only the smartest can wear this on.",
        price: 90,
        set: 3,
        stats: {
          strength: 3,
          stamina: 3,
          agility: 3,
          intelligence: 3
        }
      }
    );
    const chestId3 = Items.insert(
      {
        type: "chest",
        name: "Armor of the Engineer",
        description: "Only the strong, only the patient can wear this heavy burden.",
        price: 90,
        set: 3,
        stats: {
          strength: 3,
          stamina: 3,
          agility: 3,
          intelligence: 3
        }
      }
    );
    const leftHandId3 = Items.insert(
      {
        type: "leftHand",
        name: "Shield of Luck",
        description: "Gives You luck in desperate times.",
        price: 90,
        set: 3,
        stats: {
          strength: 3,
          stamina: 3,
          agility: 3,
          intelligence: 3
        }
      }
    );
    const rightHandId3 = Items.insert(
      {
        type: "rightHand",
        name: "Sword of Agility",
        description: "If You're looking for speed, this is what you need!",
        price: 90,
        set: 3,
        stats: {
          strength: 3,
          stamina: 3,
          agility: 3,
          intelligence: 3
        }
      }
    );


    //set4
    const headId4 = Items.insert(
      {
        type: "head",
        name: "Helmet of the Kings",
        description: "Only the worthy can wear this on.",
        price: 120,
        set: 4,
        stats: {
          strength: 4,
          stamina: 4,
          agility: 4,
          intelligence: 4
        }
      }
    );
    const chestId4 = Items.insert(
      {
        type: "chest",
        name: "Armor of the Developer",
        description: "You will not know why this armor works, but You won't care.",
        price: 120,
        set: 4,
        stats: {
          strength: 4,
          stamina: 4,
          agility: 4,
          intelligence: 4
        }
      }
    );
    const leftHandId4 = Items.insert(
      {
        type: "leftHand",
        name: "Shield of Exception",
        description: "Throws away every hit You take.",
        price: 120,
        set: 4,
        stats: {
          strength: 4,
          stamina: 4,
          agility: 4,
          intelligence: 4
        }
      }
    );
    const rightHandId4 = Items.insert(
      {
        type: "rightHand",
        name: "Buster Sword",
        description: "This is not just a sword, it is Your honor.",
        price: 120,
        set: 4,
        stats: {
          strength: 4,
          stamina: 4,
          agility: 4,
          intelligence: 4
        }
      }
    );

    //set5
    const headId5 = Items.insert(
      {
        type: "head",
        name: "Helmet of Mako",
        description: "Made out of strong steel, immune to light attacks.",
        price: 150,
        set: 5,
        stats: {
          strength: 5,
          stamina: 5,
          agility: 5,
          intelligence: 5
        }
      }
    );
    const chestId5 = Items.insert(
      {
        type: "chest",
        name: "Armor of the Assembler",
        description: "This armor looks like an ordinary armor, but his power is enormous.",
        price: 150,
        set: 5,
        stats: {
          strength: 5,
          stamina: 5,
          agility: 5,
          intelligence: 5
        }
      }
    );
    const leftHandId5 = Items.insert(
      {
        type: "leftHand",
        name: "Shield of Stark",
        description: "Made with adamantium, almost indestructible.",
        price: 150,
        set: 5,
        stats: {
          strength: 5,
          stamina: 5,
          agility: 5,
          intelligence: 5
        }
      }
    );
    const rightHandId5 = Items.insert(
      {
        type: "rightHand",
        name: "Sword of Red John",
        description: "Mysterious dagger, quick, light and complex to predict his movements.",
        price: 150,
        set: 5,
        stats: {
          strength: 5,
          stamina: 5,
          agility: 5,
          intelligence: 5
        }
      }
    );

    // Levels
    let base = 100;
    for (let i = 1; i <= 100; i++) {
      Levels.insert({
        level: i,
        experience: base + i*20
      });
    }
    
    const charId = Characters.insert(
      {
        ownerId: userId,
        appearance: {
          hairId: hairId1,
          torsoId: torsoId1,
          legsId: legsId1,
          colorId: colorId1
        },
        stats: {
        },
        equipment: {
        },
        inventoryIds: [
//          headId1, chestId1, leftHandId1, rightHandId1,
 //         headId2, chestId2, leftHandId2, rightHandId2
        ]
      }
    );

    Users.update(userId,
      {
        $set: {
          'data': {
            "characterId": charId,
            "exerciseIds": [ exerciseLunges, exerciseSquats, exerciseCrunches, exerciseLayingLegRaises, exerciseMountainClimbers, exerciseDipsOnChair, exercisePushUps, exerciseDips, exerciseSquatJumps, exerciseSquatWomen, exercisePushUpWomen, exerciseBridgeSqueezeWomen, exerciseMountainClimberWomen, exerciseLungeWomen, exerciseJumpingJackWomen, exerciseRussianTwistWomen, exerciseBicycleCrunchWomen, exerciseBackExtensionWomen, exerciseSquatJumpsWomen ],
            "workoutIds": [ workoutHomeRoutineMen, workoutCoreRoutineMen, workoutCantWalkWomen, workoutHomeRoutineWomen, workoutFullBodyRoutineWomen, workoutCantWalkWomen ],
            "currentWorkout": {
              "completedExerciseIds": []
            },
            "userInfo": {
              "age": "21",
              "weight": "70",
              "height": "180",
              "gender": "male",
              "level": "beginner"
            },
            "groupId": groupId
          }
        }
      }
    );
  }
}
