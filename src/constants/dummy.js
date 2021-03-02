import icons from "./icons"
import { COLORS } from "./theme"

export const confirmStatus = 'C'
export const pendingStatus = 'P'
export const categories = [
  {
    id: 1,
    name: 'Education',
    icon: icons.education,
    color: COLORS.yellow,
    expenses: [
      {
        id: 1,
        title: 'Tuition Fee',
        description: 'Tuition fee',
        location: 'Argus, tuition center',
        total: 100.00,
        status: pendingStatus
      },
      {
        id: 2,
        title: 'Arduino',
        description: 'Hardward',
        location: 'Argus, tuition center',
        total: 30.00,
        status: pendingStatus
      },
      {
        id: 3,
        title: 'Javascript Books',
        description: 'Javascript books',
        location: 'Argus, Book Store',
        total: 20.00,
        status: confirmStatus
      },
      {
        id: 4,
        title: 'PHP Books',
        description: 'PHP books',
        location: 'Argus, Book Store',
        total: 20.00,
        status: confirmStatus
      }
    ]
  },
  {
    id: 2,
    name: 'Nutrition',
    icon: icons.food,
    color: COLORS.lightBlue,
    expenses: [
      {
        id: 5,
        title: 'Vitamins',
        description: 'Vitamin',
        location: 'Argus, Pharmacy',
        total: 25.00,
        status: pendingStatus
      },
      {
        id: 6,
        title: 'Protein Powder',
        description: 'Protein',
        location: 'Argus, Pharmacy',
        total: 50.00,
        status: confirmStatus
      }
    ]
  },
  {
    id: 3,
    name: 'Child',
    icon: icons.babyCar,
    color: COLORS.darkGreen,
    expenses: [
      {
        id: 7,
        title: 'Toys',
        description: 'toys',
        location: 'Argus, Toy Store',
        total: 25.00,
        status: confirmStatus
      },
      {
        id: 8,
        title: 'Baby Car Seat',
        description: 'Baby Car Seat',
        location: 'Argus, Baby Car Store',
        total: 100.00,
        status: pendingStatus
      },
      {
        id: 9,
        title: 'Pampers',
        description: 'Pampers',
        location: 'Argus, Supermarket',
        total: 100.00,
        status: pendingStatus
      },
      {
        id: 10,
        title: 'Baby T-Shirt',
        description: 'T-Shirt',
        location: 'Argus, Fashion Store',
        total: 20.00,
        status: pendingStatus
      }
    ]
  },
  {
    id: 4,
    name: 'Beauty & Care',
    icon: icons.healthcare,
    color: COLORS.peach,
    expenses: [
      {
        id: 11,
        title: 'Skin Care product',
        description: 'skin care',
        location: 'Argus, Pharmacy',
        total: 10.00,
        status: pendingStatus
      },
      {
        id: 12,
        title: 'Lotion',
        description: 'Lotion',
        location: 'Argus, Pharmacy',
        total: 50.00,
        status: confirmStatus
      },
      {
        id: 13,
        title: 'Face Mask',
        description: 'Face Mask',
        location: 'Argus, Pharmacy',
        total: 50.00,
        status: pendingStatus
      },
      {
        id: 14,
        title: 'Sunscreen cream',
        description: 'Sunscreen cream',
        location: 'Argus, Pharmacy',
        total: 50.00,
        status: pendingStatus
      }
    ]
  },
  {
    id: 5,
    name: 'Sports',
    icon: icons.sports,
    color: COLORS.purple,
    expenses: [
      {
        id: 15,
        title: 'Gym Membership',
        description: 'Monthly Fee',
        location: 'Argus, Gym',
        total: 45.00,
        status: pendingStatus
      },
      {
        id: 16,
        title: 'Gloves',
        description: 'Gym Equipment',
        location: 'Argus, Gym',
        total: 15.00,
        status: confirmStatus
      }
    ]
  },
  {
    id: 6,
    name: 'Clothing',
    icon: icons.cloth,
    color: COLORS.red,
    expenses: [
      {
        id: 17,
        title: 'T-Shirt',
        description: 'Plain Color T-Shirt',
        location: 'Argus, Mall',
        total: 20.00,
        status: pendingStatus
      },
      {
        id: 18,
        title: 'Jeans',
        description: 'Blue Jeans',
        location: 'Argus, Mall',
        total: 50.00,
        status: confirmStatus
      }
    ]
  }
]


export default {
  confirmStatus,
  pendingStatus,
  categories  
}