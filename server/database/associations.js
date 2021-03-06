import Activity from '../models/activity'
import Animal from '../models/animal'
import Conversation from '../models/conversation'
import Event from '../models/event'
import Image from '../models/image'
import Meeting from '../models/meeting'
import Message from '../models/message'
import ObjectImage from '../models/objectImage'
import Place from '../models/place'
import Resource from '../models/resource'
import Slot from '../models/slot'
import User from '../models/user'

export const ActivityBelongsToAnimal = Activity.belongsTo(Animal, {
  as: 'animal',
  foreignKey: 'animalId',
})

export const ActivityBelongsToResource = Activity.belongsTo(Resource, {
  through: {
    scope: {
      objectType: 'resource',
    },
  },
  as: 'resource',
  foreignKey: 'objectId',
})

export const ActivityBelongsToEvent = Activity.belongsTo(Event, {
  through: {
    scope: {
      objectType: 'event',
    },
  },
  as: 'event',
  foreignKey: 'objectId',
})

export const ActivityRequestBelongsToEvent = Activity.belongsTo(Event, {
  as: 'requestedEvent',
  foreignKey: 'eventId',
})

export const AnimalBelongsToUser = Animal.belongsTo(User, {
  as: 'user',
  foreignKey: 'userId',
})

export const ActivityBelongsToPlace = Activity.belongsTo(Place, {
  through: {
    scope: {
      objectType: 'place',
    },
  },
  as: 'place',
  foreignKey: 'objectId',
})

export const ConversationBelongsToManyAnimal = Conversation.belongsToMany(Animal, {
  as: 'animals',
  foreignKey: 'conversationId',
  through: 'conversationsAnimals',
})

export const ConversationBelongsToAnimal = Conversation.belongsTo(Animal, {
  as: 'animal',
  foreignKey: 'animalId',
})

export const ConversationHasManyMessage = Conversation.hasMany(Message, {
  as: 'messages',
  foreignKey: 'conversationId',
})

export const AnimalBelongsToManyConversation = Animal.belongsToMany(Conversation, {
  as: 'conversations',
  foreignKey: 'animalId',
  through: 'conversationsAnimals',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const MessageBelongsToConversation = Message.belongsTo(Conversation, {
  as: 'conversation',
  foreignKey: 'conversationId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const EventBelongsToAnimal = Event.belongsTo(Animal, {
  as: 'animal',
  foreignKey: 'animalId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const EventHasManySlots = Event.hasMany(Slot, {
  as: 'slots',
  foreignKey: 'eventId',
})

export const EventBelongsToPlace = Event.belongsTo(Place, {
  as: 'place',
  foreignKey: 'placeId',
})

export const EventBelongsToManyImage = Event.belongsToMany(Image, {
  through: {
    model: ObjectImage,
    unique: false,
    scope: {
      objectType: 'event',
    },
  },
  as: 'images',
  foreignKey: 'objectId',
  constraints: false,
})

export const MeetingBelongsToConversation = Meeting.belongsTo(Conversation, {
  as: 'conversation',
  foreignKey: 'conversationId',
})

export const MessageBelongsToAnimal = Message.belongsTo(Animal, {
  as: 'animal',
  foreignKey: 'animalId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const PlaceBelongsToAnimal = Place.belongsTo(Animal, {
  as: 'animal',
  foreignKey: 'animalId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const PlaceHasManySlots = Place.hasMany(Slot, {
  as: 'slots',
  targetKey: 'placeId',
})

export const PlaceBelongsToManyImage = Place.belongsToMany(Image, {
  through: {
    model: ObjectImage,
    unique: false,
    scope: {
      objectType: 'place',
    },
  },
  as: 'images',
  foreignKey: 'objectId',
  constraints: false,
})

export const ResourceBelongsToAnimal = Resource.belongsTo(Animal, {
  as: 'animal',
  foreignKey: 'animalId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const ResourceBelongsToManyEvent = Resource.belongsToMany(Event, {
  as: 'events',
  foreignKey: 'resourceId',
  through: 'resourcesEvents',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const EventBelongsToManyResource = Event.belongsToMany(Resource, {
  as: 'resources',
  foreignKey: 'eventId',
  through: 'resourcesEvents',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true,
})

export const ResourceBelongsToManyImage = Resource.belongsToMany(Image, {
  through: {
    model: ObjectImage,
    unique: false,
    scope: {
      objectType: 'resource',
    },
  },
  as: 'images',
  foreignKey: 'objectId',
  constraints: false,
})
