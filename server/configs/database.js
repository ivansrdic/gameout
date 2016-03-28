import {Users, Characters, Items, Skins} from '/collections';

export default () => {
  let user = Users.findOne({username: 'gameout'});

  if(!user) {
    Users.remove({});
    Characters.remove({});
    Items.remove({});
    
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



    //set legs
    Skins.insert(
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

    //set torso
    Skins.insert(
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

    //set hair
    Skins.insert(
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

    //set skin

    Skins.insert(
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
  }


}