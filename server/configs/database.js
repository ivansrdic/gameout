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

    const questId = Quests.insert({
      name: "First quest",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, urna at tincidunt consequat, tortor turpis laoreet leo, in vulputate diam metus vel arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, dui eget vulputate rutrum, nibh ante tristique eros, sed tempor lacus est a erat. Duis mattis cursus nisi, quis elementum quam vulputate non. Maecenas a erat a sem gravida tempor. Morbi id turpis at dolor ultricies rutrum. Nunc tincidunt ut sem eget laoreet. Nam sed vulputate eros, sed auctor sem. Donec sit amet varius augue.",
      boss: {
        name: "First boss",
        maxHealth: 100,
        damage: 4
      },
      rewards: {
        experience: 100,
        gold: 20
      }
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
        name: "Lunges",
        level: "easy",
        description: "The lunge is a classic fitness exercise for the lower body, which helps the flexibility of the hips and hamstrings, and the strength of the buttocks, hamstrings and hip flexors.",
        link:"https://www.youtube.com/watch?v=ekkKhBLZnxc",
        unit: 10
      }
    );

    const exerciseSquats = Exercises.insert(
      {
        ownerId: userId,
        name: "Squats",
        level: "easy",
      description: "Squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quadriceps, hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body." ,
        link: "https://www.youtube.com/watch?v=nEQQle9-0NA",
        unit: 15
      }
    );

    const exerciseCrunches = Exercises.insert(
      {
        ownerId: userId,
        name: "Crunches",
        level: "easy",
        description: "The basic crunch is the consummate abdominal exercise in a strength-training program. Pay special attention to your form when you do crunches, especially if you have lower-back or neck problems",
        link: "https://www.youtube.com/watch?v=NIqgTCTd2MM",
        unit: 20
      }
    );

    const exerciseLayingLegRaises = Exercises.insert(
      {
        ownerId: userId,
        name: "Laying leg raises",
        level: "easy",
        description: "Exercise is performed by laying on back with hands under glutes, raising your legs up and returning to start position with yout knees slightly bent.",
        link: "https://www.youtube.com/watch?v=l4kQd9eWclE",
        unit: 10
      }
    );

    const exerciseMountainClimbers = Exercises.insert(
        {
          ownerId: userId,
          name: "Mountain climbers",
          level: "easy",
          description: "Place hands on floor, slightly wider than shoulder width. On forefeet, position one leg forward bent under body and extend other leg back.",
          link: "https://www.youtube.com/watch?v=fBZHkGT0W5Y",
          unit: 10
        }
    );


    const exerciseDipsOnChair = Exercises.insert(
        {
          ownerId: userId,
          name: "Dips on chair",
          level: "easy",
          description: "The dip is an exercise used in strength training. Narrow, shoulder-width dips primarily train the triceps, with major synergists being the anterior deltoid, the pectoralis muscles and the rhomboid muscles of the back (in that order).",
          link: "https://www.youtube.com/watch?v=c3ZGl4pAwZ4",
          unit: 10
        }
    );

    /*
         Medium exercises men -> level 2
    */

    const exercisePushUps = Exercises.insert(
        {
          ownerId: userId,
          name: "Push ups",
          level: "medium",
          description: "Exercise performed in a prone position by raising and lowering the body with the straightening and bending of the arms while keeping the back straight and supporting the body on the hands and toes.",
          link: "https://www.youtube.com/watch?v=Eh00_rniF8E",
          unit: 10
        }
    );

    const exerciseDips = Exercises.insert(
        {
          ownerId: userId,
          name: "Dips",
          level: "medium",
          description: "The dip is an exercise used in strength training. Narrow, shoulder-width dips primarily train the triceps, with major synergists being the anterior deltoid, the pectoralis muscles and the rhomboid muscles of the back (in that order).",
          link: "https://www.youtube.com/watch?v=wjUmnZH528Y",
          unit: 10
        }
    );

    const exerciseSquatJumps = Exercises.insert(
        {
          ownerId: userId,
          name: "Squat jumps",
          level: "medium",
          description: "Stand with your feet shoulder-width apart, arms hanging at your sides. Squat down until your knees are bent about 90 degrees. Immediately swing your arms overhead and jump upward as high as you can.",
          link: "https://www.youtube.com/watch?v=DeTBwEL4m7s",
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

    const workoutCoreRoutineMen = Workouts.insert(
        {
            ownerId: userId,
            name: "Core routine",
            description: "Excellent workout for core muscles. Complete exercises in 4 cycles, rest between exercises is 60 seconds and rest between cycles is 120 seconds.",
            exerciseIds: [exerciseCrunches, exerciseMountainClimbers, exerciseLayingLegRaises, exerciseSquatJumps]
        }
    );

    const workoutCantWalkMen = Workouts.insert(
        {
          ownerId: userId,
          name: "Can't walk",
          description: "Excellent workout for leg muscles.  Complete exercises in 5 cycles, rest between exercises is 50 seconds and rest between cycles is 100 seconds.",
          exerciseIds: [exerciseSquats, exerciseMountainClimbers, exerciseLunges, exerciseSquatJumps]
        }
    );

    /*
         Women version exercises
    */

    const exerciseSquatWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Squats_Women",
          level: "easy",
          description: "Squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quadriceps, hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body.",
          link:"https://www.youtube.com/watch?v=UXJrBgI2RxA",
          unit: 15
        }
    );

    const exercisePushUpWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Push ups_Women",
          level: "easy",
          description: "Push-up, targeting all the major muscle groups of the upper body, mostly the pecks, the chest muscles, the anterior delts, the front of your shoulder, and as you go through elbow flexion and extension, you're working your triceps.",
          link:"https://www.youtube.com/watch?v=Q7cPaJZoOng",
          unit: 10
        }
    );

    const exerciseBridgeSqueezeWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Bridge squeeze",
          level: "easy",
          description: "The bridge exercise is a back bend, a core strengthener, and a balance pose all in one.",
          link:"https://www.youtube.com/watch?v=2-d8EplhKIM",
          unit: 12
        }
    );

    const exerciseMountainClimberWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Mountain climbers_Women",
          level: "easy",
          description: "Place hands on floor, slightly wider than shoulder width. On forefeet, position one leg forward bent under body and extend other leg back.",
          link:"https://www.youtube.com/watch?v=nmwgirgXLYM",
          unit: 10
        }
    );

    const exerciseLungeWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Lunges_Women",
          level: "easy",
          description: "The lunge is a classic fitness exercise for the lower body, which helps the flexibility of the hips and hamstrings, and the strength of the buttocks, hamstrings and hip flexors.",
          link:"https://www.youtube.com/watch?v=QF0BQS2W80k",
          unit: 10
        }
    );

    const exerciseJumpingJackWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Jumping jacks_Women",
          level: "easy",
          description: "Great exercises where your getting movement in your upper body, your getting movement in your lower body, its cardiovascular and you don't need any equipment.",
          link:"https://www.youtube.com/watch?v=UpH7rm0cYbM",
          unit: 15
        }
    );

    const exerciseRussianTwistWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Russian twists_Women",
          level: "easy",
          description: "Grab a medicine ball, dumbbell, or weight plate and sit on the floor with your hips and knees bent 90 degrees. Hold the weight straight out in front of you and keep your back straight. Explosively twist your torso as far as you can to the left, and then reverse the motion, twisting as far as you can to the right. That's one rep.",
          link:"https://www.youtube.com/watch?v=NeAtimSCxsY",
          unit: 20
        }
    );

    const exerciseBicycleCrunchWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Bicycle crunches_Women",
          level: "easy",
          description: "Lie on your back on a mat with knees bent, feet on the floor, and hands behind your head (dont clasp your fingers). Press your lower back into the mat and tighten your ab muscles as you lift your head, shoulders, and upper back off the floor and simultaneously move your right elbow and left knee toward each other while straightening your right leg (don't let it touch the ground).",
          link:"https://www.youtube.com/watch?v=Iwyvozckjak",
          unit: 15
        }
    );

    const exerciseBackExtensionWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Back extensions_Women",
          level: "easy",
          description: "Back extension is mostly going to mostly work the erector spine or erector spine muscle group which is the long muscles that run vertically and parallel to your spine and basically are the muscles that hold you up. It's really important to do back extension especially if you have a desk job and you're used to always being in this slumped over type of posture.",
          link:"https://www.youtube.com/watch?v=DDJtB8Zgyow",
          unit: 10
        }
    );

    const exerciseSquatJumpsWomen = Exercises.insert(
        {
          ownerId: userId,
          name: "Squat jumps_Women",
          level: "easy",
          description: "Stand with your feet shoulder-width apart, arms hanging at your sides. Squat down until your knees are bent about 90 degrees. Immediately swing your arms overhead and jump upward as high as you can.",
          link:"https://www.youtube.com/watch?v=U4s4mEQ5VqU",
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

    const workoutFullBodyRoutineWomen = Workouts.insert(
        {
          ownerId: userId,
          name: "Full body routine Women",
          description: "Excellent workout for core muscles. Complete exercises in 4 cycles, rest between exercises is 60 seconds and rest between cycles is 120 seconds.",
          exerciseIds: [exercisePushUpWomen, exerciseJumpingJackWomen, exerciseLungeWomen, exerciseRussianTwistWomen]
        }
    );

    const workoutCantWalkWomen = Workouts.insert(
        {
          ownerId: userId,
          name: "Can't walk Women",
          description: "Excellent workout for leg muscles.  Complete exercises in 4 cycles, rest between exercises is 50 seconds and rest between cycles is 100 seconds.",
          exerciseIds: [exerciseSquatWomen, exerciseJumpingJackWomen, exerciseMountainClimberWomen, exerciseSquatJumpsWomen, exerciseLungeWomen]
        }
    );


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
        price: 20,
        set: 1,
        stats: {
          strength: 5,
          stamina: 4,
          agility: 3,
          intelligence: 2
        }
      }
    );
    const chestId1 = Items.insert(
      {
        type: "chest",
        name: "Chaest of the Initiatives",
        description: "Basic trainee helmet",
        price: 25,
        set: 1,
        stats: {
          strength: 2,
          stamina: 2,
          agility: 2,
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
          strength: 3,
          stamina: 1,
          agility: 2,
          intelligence: 2
        }
      }
    );
    const rightHandId1 = Items.insert(
      {
        type: "rightHand",
        name: "Sword of Honor",
        description: "First weapon of the future Warrior",
        price: 20,
        set: 1,
        stats: {
          strength: 3,
          stamina: 2,
          agility: 2,
          intelligence: 2
        }
      }
    );

    //set2
    const headId2 = Items.insert(
      {
        type: "head",
        name: "Helmet of Bravery",
        description: "Keeps your head from enemy attacks.",
        price: 25,
        set: 2,
        stats: {
          strength: 4,
          stamina: 3,
          agility: 2,
          intelligence: 3
        }
      }
    );
    const chestId2 = Items.insert(
      {
        type: "chest",
        name: "Armor of the Kings",
        description: "Modern armor, gives agility.",
        price: 30,
        set: 2,
        stats: {
          strength: 2,
          stamina: 2,
          agility: 4,
          intelligence: 3
        }
      }
    );
    const leftHandId2 = Items.insert(
      {
        type: "leftHand",
        name: "Shield of Power",
        description: "Good defense is the best offense.",
        price: 20,
        set: 2,
        stats: {
          strength: 3,
          stamina: 4,
          agility: 3,
          intelligence: 2
        }
      }
    );
    const rightHandId2 = Items.insert(
      {
        type: "rightHand",
        name: "Sword of Power",
        description: "Whoever holds this sword has a great power!",
        price: 25,
        set: 2,
        stats: {
          strength: 5,
          stamina: 4,
          agility: 3,
          intelligence: 2
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
            "exerciseIds": [ exerciseLunges, exerciseSquats, exerciseCrunches, exerciseLayingLegRaises, exerciseMountainClimbers, exerciseDipsOnChair, exercisePushUps, exerciseDips, exerciseSquatJumps ],
            "workoutIds": [ workoutHomeRoutineMen, workoutCoreRoutineMen, workoutCantWalkMen ],
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
