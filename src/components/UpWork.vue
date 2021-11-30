<template>
  <v-container>
    <v-row justify="center" align="center" class="mt-5">
      <v-card
        outlined
        class="ma-0 pa-0"
        width="665"
        height="80"
        style="
          border: solid #5584bb 2px;
          border-radius: 8px;
          position: relative;
        "
      >
        <div class="ma-0 pa-0 mt-2 ml-2" style="position: absolute; z-index: 5">
          <v-icon>mdi-history</v-icon>
        </div>
        <div
          class="ma-0 pa-0 mt-2 mr-3"
          style="position: absolute; right: 0; z-index: 5; opacity: 0.5"
        >
          Ans = {{ result }}
        </div>
        <v-text-field
          class="right-aligned-input text--darken-3 ma-0 pa-0 pt-5"
          style="font-size: 27px; font-weight: 500"
          :value="calculationString"
          color="grey lighten-43"
          single-line
          full-width
          solo
          flat
        />
      </v-card>
    </v-row>
    <v-row justify="center" align="center" class="mt-5">
      <div style="display: flex; justify-cotent: space-between">
        <div class="ma-0 pa-0">
          <v-card
            class="ma-0 pa-0"
            width="184"
            height="38"
            color="#DBDCE0"
            align="center"
            justify="center"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" class="mx-5" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">Rad</div></v-col
              >
              <v-col
                ><div style="font-size: 12px; font-weight: 450; opacity: 0.3">
                  |
                </div></v-col
              >
              <v-col
                ><div style="font-size: 12px; font-weight: 450; opacity: 0.5">
                  Deg
                </div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">x!</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            @click="appendToCalString('(')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">(</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            color="#DBDCE0"
            justify="center"
            @click="appendToCalString(')')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">)</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            @click="appendToCalString('%')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">%</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            @click="clearCalString()"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">CE</div></v-col
              >
            </v-row>
          </v-card>
        </div>
      </div>
    </v-row>
    <v-row justify="center" align="center" class="mt-5">
      <div style="display: flex; justify-cotent: space-between">
        <div class="ma-0 pa-0">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            color="#DBDCE0"
            justify="center"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">Inv</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">Sin</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">In</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('7')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">7</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('8')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">8</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('9')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">9</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            @click="appendToCalString('/')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 18px; font-weight: 400">÷</div></v-col
              >
            </v-row>
          </v-card>
        </div>
      </div>
    </v-row>
    <v-row justify="center" align="center" class="mt-5">
      <div style="display: flex; justify-cotent: space-between">
        <div class="ma-0 pa-0">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">π</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">cos</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">log</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('4')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">4</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('5')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">5</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('6')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">6</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            @click="appendToCalString('*')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 18px; font-weight: 400">×</div></v-col
              >
            </v-row>
          </v-card>
        </div>
      </div>
    </v-row>
    <v-row justify="center" align="center" class="mt-5">
      <div style="display: flex; justify-cotent: space-between">
        <div class="ma-0 pa-0">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">e</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">tan</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">√</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('1')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">1</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('2')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">2</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('3')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">3</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            @click="appendToCalString('-')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 21px; font-weight: 400">−</div></v-col
              >
            </v-row>
          </v-card>
        </div>
      </div>
    </v-row>
    <v-row justify="center" align="center" class="mt-5">
      <div style="display: flex; justify-cotent: space-between">
        <div class="ma-0 pa-0">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 12px; font-weight: 450">Ans</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 13px; font-weight: 450">EXP</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 14px; font-weight: 450">
                  x<sup>y</sup>
                </div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('0')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 400">0</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#F2F3F5"
            @click="appendToCalString('.')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 16px; font-weight: 650">.</div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#4286F5"
            @click="calculateCalString()"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 21px; font-weight: 500; color: white">
                  =
                </div></v-col
              >
            </v-row>
          </v-card>
        </div>
        <div class="ma-0 pa-0 ml-2">
          <v-card
            class="ma-0 pa-0"
            width="88"
            height="38"
            align="center"
            justify="center"
            color="#DBDCE0"
            @click="appendToCalString('+')"
            style="
              border-radius: 5px;
              display: flex;
              justify-content: center;
              flex-direction: row;
            "
          >
            <v-row align="center" justify="center">
              <v-col
                ><div style="font-size: 19px; font-weight: 400">+</div></v-col
              >
            </v-row>
          </v-card>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UpWork",

  data: () => ({
    calculationString: "",
    result: "",
  }),

  methods: {
    appendToCalString(x) {
      this.calculationString += x;
    },
    clearCalString() {
      this.calculationString = "";
      this.result = "";
    },
    calculateCalString() {
      this.result = eval(this.calculationString);
    },
  },
};
</script>

<style scoped>
.right-aligned-input >>> input {
  text-align: right;
}
</style>

