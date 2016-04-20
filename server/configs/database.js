// Dev
import {Users, Characters, Items, Skins, Exercises, Workouts, Levels} from '/collections';

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

    Accounts.createUser({
      email: 'gameout@gameout.com',
      username: 'gameout',
      password: 'gameout'
    });
    user = Users.findOne({username: 'gameout'});


    const userId = user._id;

    // Dev
    const exerciseId1 = Exercises.insert(
      {
        ownerId: userId,
        name: "Push-ups",
        description: "Raise body up off floor by extending arms with body straight",
        unit: 10
      }
    );

    // Dev
    const exerciseId2 = Exercises.insert(
        {
            ownerId: userId,
            name: "Pull-ups",
            description: "Pulling body up using arms with varierity of grips" ,
            unit: 5
        }
    );

    // Dev
    const exerciseId3 = Exercises.insert(
        {
            ownerId: userId,
            name: "Squats",
            description: "To sit in a crouching position with knees bent and the buttocks on or near the heels",
            unit: 20
        }
    );

    // Dev
    const exerciseId4 = Exercises.insert(
        {
            ownerId: userId,
            name: "Dips",
            description: "The tricep dip is an excellent exercise that works the triceps using your own body",
            unit: 8
        }
    );

    // Dev
    const workoutId1 = Workouts.insert(
        {
            ownerId: userId,
            name: "Chest routine",
            description: "Excellent exercises for chest muscles.",
            exerciseIds: [exerciseId1, exerciseId4]
        }
    );

    // Dev
    const workoutId2 = Workouts.insert(
        {
            ownerId: userId,
            name: "Full body routine",
            description: "Excellent exercises for full body workout.",
            exerciseIds: [exerciseId1, exerciseId2, exerciseId3, exerciseId4]
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
        price: 1,
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
        price: "1",
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
        price: "1",
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
        price: "1",
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
        price: "2",
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
        price: "2",
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
        price: "2",
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
        price: "2",
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
          strength: 0,
          stamina: 0,
          agility: 0,
          intelligence: 0,
          health: 50,
          experience: 0,
          level: 1,
          gold: 0
        },
        equipment: {
        },
        inventoryIds: [
          headId1, chestId1, leftHandId1, rightHandId1,
          headId2, chestId2, leftHandId2, rightHandId2
        ]
      }
    );

    Users.update(userId,
      {
        $set: {
          'data': {
            "characterId": charId,
            "exerciseIds": [ exerciseId1, exerciseId2, exerciseId3, exerciseId4 ],
            "workoutIds": [ workoutId1, workoutId2 ],
            "currentWorkout": {
              "completedExerciseIds": []
            },
            "userInfo": {
              "age": "21",
              "weight": "70",
              "height": "180",
              "gender": "male",
              "level": "beginner"
            }
          }
        }
      }
    );
  }
}
