import React, {useState, useRef} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Animated
} from 'react-native'

import { VictoryPie } from 'victory-native'

import { COLORS, SIZES, FONTS, icons, Dummy } from '../constants/'

const Home = () => {

  const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current

  const [viewMode, setViewMode] = useState('chart')
  const [categories, setCategories] = useState(Dummy.categories)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showMoreToggle, setShowMoreToggle] = useState(false)

  const renderNavBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            width: 50
          }}
          onPress={() => {}}
        >
          <Image
            source={icons.backArrow}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: 50
          }}
          onPress={() => {}}
        >
          <Image
            source={icons.more}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderHeader = () => {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white
        }}
      >
        <View
          style={{}}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h2
            }}
          >
            My Expenses
          </Text>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.h3
            }}
          >
            Summary (private)
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            alignItems: 'center'
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.lightGray,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              source={icons.calendar}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue
              }}
            />
          </View>
          <View
            style={{
              marginLeft: SIZES.padding
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3
              }}
            >
              11 Nov, 2020
            </Text>
            <Text
              style={{
                color: COLORS.darkGray,
                ...FONTS.body3
              }}
            >
              18% more than last month
            </Text>
          </View>
        </View>
      </View>
    )
  }

  const renderCategoryHeaderSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: SIZES.padding,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Title */}
        <View>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h3
            }}
          >
            CATEGORIES
          </Text>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body4
            }}
          >
            {categories.length} Total
          </Text>
        </View>
        {/* Buttons */}
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
              borderRadius: 25
            }}
            onPress={() => setViewMode('chart')}
          >
            <Image
              source={icons.chart}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkGray
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              backgroundColor: viewMode == 'list' ? COLORS.secondary : null,
              borderRadius: 25
            }}
            onPress={() => setViewMode('list')}
          >
            <Image
              source={icons.menu}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkGray
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderCategoryList = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 5,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          ...styles.shadow
        }}
        onPress={() => setSelectedCategory(item)}
      >
        <Image
          source={item.icon}
          style={{
            width: 20,
            height: 20,
            tintColor: item.color
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.primary,
            ...FONTS.h4
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    )
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding - 5
        }}
      >
        <Animated.View
          style={{
            height: categoryListHeightAnimationValue
          }}
        >
          <FlatList
            data={categories}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            numColumns={2}
          />
        </Animated.View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginVertical: SIZES.base,
            justifyContent: 'center',
          }}
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 115,
                duration: 300,
                useNativeDriver: false
              }).start()
            } else {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 172.5,
                duration: 300,
                useNativeDriver: false
              }).start()
            }
            setShowMoreToggle(!showMoreToggle)
          }}
        >
          <Text
            style={{
              ...FONTS.body4
            }}
          >
            {
              showMoreToggle ?
                'LESS'
                :'MORE'
            }
          </Text>
          <Image
            source={showMoreToggle ? icons.upArrow : icons.downArrow}
            style={{
              marginLeft: 5,
              width: 15,
              height: 15,
              alignSelf: 'center'
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderIncomingExpensesTitle = () => {
    return (
      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary
          }}
        >
          INCOMING EXPENSES
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.darkGray
          }}
        >
          12 Total
        </Text>
      </View>
    )
  }

  const renderIncomingExpenses = () => {
    let allExpenses = selectedCategory ? selectedCategory.expenses : []
    // filter pendings
    let incomingExpenses = allExpenses.filter(a => a.status == 'P')

    const renderItem = ({ item, index }) => (
      <View
        style={{
          width: 300,
          marginRight: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow
        }}
      >
        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
            padding: SIZES.padding,
            alignItems: 'center'
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: COLORS.lightGray,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: SIZES.base
            }}
          >
            <Image
              source={selectedCategory.icon}
              style={{
                width: 30,
                height: 30,
                tintColor: selectedCategory.color
              }}
            />
          </View>
          <Text
            style={{
              ...FONTS.h3,
              color: selectedCategory.color
            }}
          >
            {selectedCategory.name}
          </Text>
        </View>
        {/* Expenses description */}
        <View
          style={{
            paddingHorizontal: SIZES.padding
          }}
        >
          {/* Title and description */}
          <Text
            style={{
              ...FONTS.h2
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              flexWrap: 'wrap',
              color: COLORS.darkGray
            }}
          >
            {item.description}
          </Text>
          {/* Location */}
          <Text
            style={{
              marginTop: SIZES.padding,
              ...FONTS.h4
            }}
          >
            Location
          </Text>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Image
              source={icons.pin}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkGray,
                marginRight: 5
              }}
            />
            <Text
              style={{
                marginBottom: SIZES.base,
                ...FONTS.body4,
                color: COLORS.darkGray
              }}
            >
              {item.location}
            </Text>
          </View>
        </View>
        {/* Price */}
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomStartRadius: SIZES.radius,
            borderBottomEndRadius: SIZES.radius,
            backgroundColor: selectedCategory.color,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body3
            }}
          >
            CONFIRM {item.total.toFixed(2)} USD
          </Text>
        </View>
      </View>
    )

    return (
      <View>
        {renderIncomingExpensesTitle()}

        {
          incomingExpenses.length > 0 &&
          <FlatList
            data={incomingExpenses}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        }
        {
          incomingExpenses.length == 0 &&
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 300
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3
              }}
            >
              No Record
            </Text>
          </View>
        }
      </View>
    )
  }

  const processCategoryDataToDisplay = () => {
    // filter expenses with confirmed status
    const chartData = categories.map((item) => {
      const confirmExpenses = item.expenses.filter(a => a.status == 'C')
      const total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)
      return {
        name: item.name,
        y: total,
        expenseCount: confirmExpenses.length,
        color: item.color,
        id: item.id
      }
    })

    // Filter out categories with no data/expenses
    const filterChartData = chartData.filter(a => a.y > 0)
    // Calculate the total expenses
    const totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)
    // Calculate percentage and repopulate chart data
    const finalChartData = filterChartData.map((item) => {
      let percentage = (item.y / totalExpense * 100).toFixed(0)
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id
      }
    })

    return finalChartData
  }

  const setSelectedCategoryByName = (categoryName) => {
    let category = categories.find(({ name }) => name == categoryName)
    setSelectedCategory(category)
  }

  const renderChart = () => {
    const chartData = processCategoryDataToDisplay()
    const colorScales = chartData.map((item) => item.color)
    const totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <VictoryPie
          data={chartData}
          colorScale={colorScales}
          labels={(datum) => `${datum.y}`}
          radius={
            ({datum}) => (selectedCategory && selectedCategory.name == datum.name) ?
              SIZES.width * 0.4
              : SIZES.width * 0.4 - 10
          }
          innerRadius={70}
          labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
          style={{
            labels: {
              fill: COLORS.white,
              ...FONTS.body3
            },
            parent: {
              ...styles.shadow
            }
          }}
          width={SIZES.width * 0.8}
          height={SIZES.width * 0.8}
          events={[{
            target: 'data',
            eventHandlers: {
              onPress: () => {
                return [{
                  target: 'labels',
                  mutation: (props) => {
                    let categoryName = chartData.[props.index].name
                    setSelectedCategoryByName(categoryName)
                  }
                }]
              }
            }
          }]}
        />
        <View
          style={{
            position: 'absolute',
            top: '42%',
            left: '42%'
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              textAlign: 'center'
            }}
          >
            {totalExpenseCount}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.body3
            }}
          >
            Expenses
          </Text>
        </View>
      </View>
    )
  }

  const renderExpenseSummary = () => {
    const data = processCategoryDataToDisplay()

    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 40,
            paddingHorizontal: SIZES.radius,
            borderRadius: 10,
            backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
          }}
          onPress={() => {
            let categoryName = item.name
            setSelectedCategoryByName(categoryName)
          }}
        >
          {/* Name/Category */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : item.color,
                borderRadius: 5
              }}
            >
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: (selectedCategory && selectedCategory.name == item.name ) ? COLORS.white : COLORS.primary,
                ...FONTS.h3
              }}
            >
              {item.name}
            </Text>
          </View>
          {/* Expenses */}
          <View
            style={{
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                color: (selectedCategory && selectedCategory.name == item.name ) ? COLORS.white : COLORS.primary,
                ...FONTS.h3
              }}
            >
              {item.y} UDS - {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <View
        style={{
          padding: SIZES.padding
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    )
  }

  return (
    <View
      style={styles.container}
    >
      {/* Nav bar section */}
      {renderNavBar()}
      {/* Header section */}
      {renderHeader()}
      {/* Category header section */}
      {renderCategoryHeaderSection()}

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 60
        }}
      >
        {
          viewMode == 'list' &&
          <View
            style={{}}
          >
            {renderCategoryList()}
            {renderIncomingExpenses()}
          </View>
        }
        {
          viewMode == 'chart' &&
          <View
            style={{}}
          >
            {renderChart()}
            {renderExpenseSummary()}
          </View>
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  }
})

export default Home