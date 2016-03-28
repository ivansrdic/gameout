// Dev
import {Users, Characters, Items, Exercises, ExerciseGroups} from '/collections';

export default () => {
  let user = Users.findOne({username: 'gameout'});

  if(!user) {
    Users.remove({});
    Characters.remove({});
    Items.remove({});
    // Dev
    Exercises.remove({});
    ExerciseGroups.remove({});
    
    Accounts.createUser({
      email: 'gameout@gameout.com',
      username: 'gameout',
      password: 'gameout'
    });
    user = Users.findOne({username: 'gameout'});


    const userId = user._id;

    //set 1
    const headId1 = Items.insert(
      {
        type: "head",
        name: "head1",
        description: "head one",
        price: 1,
        set: 1
      }
    );
    const chestId1 = Items.insert(
      {
        type: "chest",
        name: "chest1",
        description: "chest one",
        price: "1",
        set: 1
      }
    );
    const leftHandId1 = Items.insert(
      {
        type: "leftHand",
        name: "leftHand1",
        description: "leftHand one",
        price: "1",
        set: 1
      }
    );
    const rightHandId1 = Items.insert(
      {
        type: "rightHand",
        name: "rightHand1",
        description: "rightHand one",
        price: "1",
        set: 1
      }
    );

    //set2
    const headId2 = Items.insert(
      {
        type: "head",
        name: "head2",
        description: "head two",
        price: "2",
        set: 2
      }
    );
    const chestId2 = Items.insert(
      {
        type: "chest",
        name: "chest2",
        description: "chest two",
        price: "2",
        set: 2
      }
    );
    const leftHandId2 = Items.insert(
      {
        type: "leftHand",
        name: "leftHand2",
        description: "leftHand two",
        price: "2",
        set: 2
      }
    );
    const rightHandId2 = Items.insert(
      {
        type: "rightHand",
        name: "rightHand2",
        description: "rightHand two",
        price: "2",
        set: 2
      }
    );

    // Dev
    const workoutId1 = Exercises.insert(
      {
        ownerId: userId,
        name: "Push-ups",
        description: "Raise body up off floor by extending arms with body straight",
        unit: 10
      }
    );

    // Dev
    const workoutId2 = Exercises.insert(
        {
            ownerId: userId,
            name: "Pull-ups",
            description: "Pulling body up using arms with varierity of grips" ,
            unit: 5
        }
    );

    // Dev
    const workoutId3 = Exercises.insert(
        {
            ownerId: userId,
            name: "Squat",
            description: "To sit in a crouching position with knees bent and the buttocks on or near the heels",
            unit: 20
        }
    );

    // Dev
    const workoutId4 = Exercises.insert(
        {
            ownerId: userId,
            name: "Dips",
            description: "The tricep dip is an excellent exercise that works the triceps using your own body",
            unit: 8
        }
    );

    // Dev
    const workoutGroupId1 = ExerciseGroups.insert(
        {
            ownerId: userId,
            name: "Chest routine",
            description: "Excellent exercises for chest muscles.",
            exerciseIds: [workoutId1, workoutId4]
        }
    );

    // Dev
    const workoutGroupId2 = ExerciseGroups.insert(
        {
            ownerId: userId,
            name: "Full body routine",
            description: "Excellent exercises for full body workout.",
            exerciseIds: [workoutId1, workoutId2, workoutId3, workoutId4]
        }
    );


    const charId = Characters.insert(
      {
        ownerId: userId,
        appearance: {
          hairId: "0",
          torsoId: "0",
          legsId: "0",
          colorId: "0"
        },
        stats: {
          gender: "male",
          health: 50,
          level: 1,
          experience: 0,
          gold: 0
        },
        equipment: {
          headId: "0",
          chestId: "0",
          leftHandId: "0",
          rightHandId: "0"
        },
        inventoryIds: [
          headId1, chestId1, leftHandId1, rightHandId1,
          headId2, chestId2, leftHandId2, rightHandId2
        ],
        // Dev
        workoutIds: [
            workoutId1, workoutId2, workoutId3, workoutId4
        ],
        groupWorkoutIds: [workoutGroupId1, workoutGroupId2
        ]
      }
    );

    Users.update(userId,
      {
        $set: {
          'data': {
            "characterId": charId,
            "age": "21",
            "weight": "70",
            "height": "180",
            "gender": "male"
          }
        }
      }
    );
  }


}