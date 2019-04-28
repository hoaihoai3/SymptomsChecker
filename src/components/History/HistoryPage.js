import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { historyFetch } from '../../actions';
import HistoryDetail from './HistoryDetail';

class HistoryPage extends Component {
  state = { list: [] };

  componentWillMount() {
    this.props.historyFetch();
  }

  componentDidMount() {
    // let temp = [];
    // temp = this.props.historyList;
    // this.setState({ list: temp });
    // console.log(this.props.historyList);
    // console.log(temp);
  }
  renderSectionHeader(title) {
    return (
      <View style={styles.sectionHeaderContainerStyle}>
        <Text style={styles.sectionHeaderStyle}>{title}</Text>
      </View>
    );
  }

  renderSymptomDetail(arr, item, key) {
    if (key === (arr.length - 1)) {
      return <Text key={key}>{item}</Text>;
    }
    return <Text key={key}>{item}, </Text>;
  }

  renderHistory({ item, key }) {
    return (
        <View style={styles.cardStyle} key={key}>
          {this.renderSectionHeader(item.time)}
          <View style={{ borderBottomWidth: 1, borderColor: '#DCDCDC' }}>
            <View style={{ paddingLeft: 15, marginTop: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Symptoms</Text>
            </View>
            <HistoryDetail
            item={item.symptoms.map((symptom, key1) => (
             this.renderSymptomDetail(item.symptoms, symptom, key1)
              ))}
            />
          </View>

          <View>
            <View style={{ paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Results</Text>
            </View>
            {item.results.map((result, key2) => (
              <HistoryDetail
               customStyle={{ paddingBottom: 5 }}
               key={key2}
               title={result.disease}
               item={result.score}
               iconName='angle-right'
               onPress={() => Actions.info({ disease: result.id })}
              />
            ))}
            <View style={{ marginBottom: 10 }} />
          </View>
        </View>
    );
  }

  render() {
    const {
            containerStyle,
            listStyle,
          } = styles;

    return (
      <View style={containerStyle}>
        <FlatList
          style={listStyle}
          data={this.props.historyList}
          renderItem={(item) => this.renderHistory(item, item.key)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#E8F8FF'
  },
  listStyle: {
    backgroundColor: '#E8F8FF',
    height: 'auto',
    margin: 2,
    marginTop: 5,
    borderRadius: 3,
    padding: 2,
    flex: 1,
    borderColor: '#58595A',
    borderBottomWidth: 0
  },
  sectionHeaderStyle: {
    fontSize: 22,
    paddingLeft: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  sectionHeaderContainerStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#229AD5',
    height: 60,
  },
  itemContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E8F8FF',
    borderBottomWidth: 1,
    borderColor: '#F3F3F3'
  },
  cardStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#229AD5',
    backgroundColor: '#FFF',
    marginBottom: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    shadowRadius: 5,
    shadowColor: '#000',
  }
};

const mapStateToProps = ({ history }) => {
  const { historyList } = history;

  return { historyList };
};

export default connect(mapStateToProps, { historyFetch })(HistoryPage);
