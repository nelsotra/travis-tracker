<template>
  <!--
      This is the main page for the spanish section of the site
      It was built to help me review spanish words as I was learning them
      How it works:
        - I originally had this all in one file, and the logic around correct/incorrect answers
        and the part to redo missed questions became quite complicated, so I created a component
        to handle displaying the test questions and taking care of the logic
  -->
  <div>
    <topHeader titleLink="/spanishhome" titleText="Spanish Vocab Review" />

    <div class="mt-0">
      <b-container fluid class="mt-4 mb-4">
        <b-row class="mb-3">
          <b-col cols="3"></b-col>
          <!-- This lets the user toggle between english to spanish, spanish to english, or random -->
          <b-col cols="6">
            <b-form-group>
              <b-form-radio-group
                id="directionRadio"
                buttons
                button-variant="outline-secondary"
                v-model="splitPercent"
                @change="changeSplitPercent"
                name="directionRadio"
              >
                <b-form-radio value="1">Spanish to English</b-form-radio>
                <b-form-radio value="0">English to Spanish</b-form-radio>
                <b-form-radio value="0.5">Random</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>

        <b-row>
          <b-col cols="3"></b-col>
          <!-- This section is just the select that lets a user pick with list to review
          It binds to the current object in the data section-->
          <b-col cols="6">
            <b-form-select size="lg" v-model="current.item" @change="onChange">
              <option
                v-bind:key="v.id"
                v-bind:value="{id: v.id, name: v.name, data: v.data}"
                v-for="v in vocabFiles"
              >{{ v.name }}</option>
            </b-form-select>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>
      </b-container>

      <!-- Once the user picks a list, we pass it into a component to display the test
              The "dataChange" key gets incremented AFTER the array is populated and transformed
              otherwise I was running into problems where the component was rendering before
      the array was updated.  There's probably a better way to do this...-->
      <vocabTest
        v-if="vocabArray.length > 0"
        v-bind:key="dataChange"
        :vocabList="vocabArray"
        text
        depth="0"
      />
    </div>

    <bttmFooter footerLink="/spanishhome" footerText="Spanish Vocab Review" />
  </div>
</template>

<script>
import topHeader from '../header'
import bttmFooter from '../footer'
import vocabTest from './vocabTest'
import duolingoCurrent from '../../../public/json-files/spanish-data/duolingoCurrent.json'
import duolingoAll from '../../../public/json-files/spanish-data/duolingoAll.json'
import vocab1 from '../../../public/json-files/spanish-data/vocab1.json'
import vocab2 from '../../../public/json-files/spanish-data/vocab2.json'
import vocab3a from '../../../public/json-files/spanish-data/vocab3a.json'
import vocab3b from '../../../public/json-files/spanish-data/vocab3b.json'
import vocab4 from '../../../public/json-files/spanish-data/vocab4.json'
import vocab5 from '../../../public/json-files/spanish-data/vocab5.json'
import vocab6 from '../../../public/json-files/spanish-data/vocab6.json'
import vocab7 from '../../../public/json-files/spanish-data/vocab7.json'
import vocab8a from '../../../public/json-files/spanish-data/vocab8a.json'
import vocab8b from '../../../public/json-files/spanish-data/vocab8b.json'
import vocab9 from '../../../public/json-files/spanish-data/vocab9.json'
import vocab10a from '../../../public/json-files/spanish-data/vocab10a.json'
import vocab10b from '../../../public/json-files/spanish-data/vocab10b.json'
import vocab11 from '../../../public/json-files/spanish-data/vocab11.json'
import vocab12 from '../../../public/json-files/spanish-data/vocab12.json'
import vocab13 from '../../../public/json-files/spanish-data/vocab13.json'
import vocab14 from '../../../public/json-files/spanish-data/vocab14.json'
import vocab15 from '../../../public/json-files/spanish-data/vocab15.json'
import vocab16 from '../../../public/json-files/spanish-data/vocab16.json'
import vocab17 from '../../../public/json-files/spanish-data/vocab17.json'

export default {
  name: 'SpanishHome',
  components: {
    topHeader,
    bttmFooter,
    vocabTest
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      splitPercent: '1',
      vocabArray: [],
      redoArray: [],
      currentIndex: 0,
      maxIndex: 0,
      question: '',
      answer: '',
      attempted: false,
      userAnswer: '',
      correct: false,
      numberCorrect: 0,
      numberWrong: 0,
      displayVariant: 'success',
      displayText: 'Correct!!',
      redo: false,
      done: false,
      dataChange: 0,

      current: {
        item: {
          id: 0,
          name: 'Select which group to review',
          data: null
        }
      },

      vocabFiles: [
        {
          id: 0,
          name: 'Select which group to review',
          data: null
        },
        {
          id: 9999,
          name: 'Duolingo - Current',
          data: duolingoCurrent
        },
        {
          id: 7777,
          name: 'Duolingo - All',
          data: duolingoAll
        },
        {
          id: 1,
          name: 'List 1 - Nouns',
          data: vocab1
        },
        {
          id: 2,
          name: 'List 2: Nouns, Colors, some Verbs',
          data: vocab2
        },
        {
          id: 3.1,
          name: 'List 3a: Nouns 1',
          data: vocab3a
        },
        {
          id: 3.2,
          name: 'List 3b: Nouns 2',
          data: vocab3b
        },
        {
          id: 4,
          name: 'List 4: Adjectives',
          data: vocab4
        },
        {
          id: 5,
          name: 'List 5: Adjectives/Adverbs',
          data: vocab5
        },
        {
          id: 6,
          name: 'List 6: Verbs',
          data: vocab6
        },
        {
          id: 7,
          name: 'List 7: Verbs',
          data: vocab7
        },
        {
          id: 8.1,
          name: 'List 8a: Nouns 1',
          data: vocab8a
        },
        {
          id: 8.2,
          name: 'List 8b: Nouns 2',
          data: vocab8b
        },
        {
          id: 9,
          name: 'List 9: Numbers, Months, Days of Week, Seasons, Time, etc',
          data: vocab9
        },
        {
          id: 10.1,
          name: 'List 10a: Adjectives 1',
          data: vocab10a
        },
        {
          id: 10.2,
          name: 'List 10b: Adjectives 2',
          data: vocab10b
        },
        {
          id: 11,
          name: 'List 11: More words',
          data: vocab11
        },
        {
          id: 12,
          name: 'List 12: More words',
          data: vocab12
        },
        {
          id: 13,
          name: 'List 13: More words',
          data: vocab13
        },
        {
          id: 14,
          name: 'List 14: More words',
          data: vocab14
        },
        {
          id: 15,
          name: 'List 15: More words',
          data: vocab15
        },
        {
          id: 16,
          name: 'List 16: More words',
          data: vocab16
        },
        {
          id: 17,
          name: 'List 17: More words',
          data: vocab17
        }
      ]
    }
  },
  methods: {
    // This gets called whenever the user picks a different list from the form select
    // It just updates the vocab array to whatever the new data source is
    // The dataChange variable is tieds to the vocabTest component, so when it updates, that will update
    onChange () {
      if (this.current.item.data === null) {
        this.vocabArray = []
      } else {
        this.vocabArray = this.getVocabArray()
      }
      this.dataChange += 1
    },

    // When the user picks a different radio button for the translation direction, this sets the value
    // Bind should work, but it doesn't for some reason, so I'm resorting to this until I figure it out
    changeSplitPercent (value) {
      if (value) {
        this.splitPercent = value
      }
      this.onChange()
    },

    // This takes the raw data, which is json, and extracts them into an array, to allow us to randomly
    // shuffle the words, and index into an array for display purposes
    getVocabArray () {
      if (this.current.item.data === null) {
        return []
      }

      // This part just pushes to an array, but mixes the order based on a random number, so that
      // sometimes you're translating from english to spanish, and spanish to english.
      const vocabArray = []
      for (const d in this.current.item.data) {
        if (Math.random() < +this.splitPercent) {
          vocabArray.push([d, this.current.item.data[d]])
        } else {
          vocabArray.push([this.current.item.data[d], d])
        }
      }

      // Doing a random shuffle on the array, so the vocab words are always in a different order
      for (let i = 0; i < vocabArray.length - 1; i++) {
        const j = i + Math.floor(Math.random() * (vocabArray.length - i))
        const tmp = vocabArray[j]
        vocabArray[j] = vocabArray[i]
        vocabArray[i] = tmp
      }
      return vocabArray
    }
  }
}
</script>

<style>
</style>
