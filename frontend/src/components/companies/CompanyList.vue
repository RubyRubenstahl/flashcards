<template>
  <q-list>
    <q-item v-if="!companies">
      <q-item-section>
        No Companies Found:(
      </q-item-section>
    </q-item>

    <q-expansion-item
      v-else
      v-for="company in companies"
      :key="company._id"
      switch-toggle-side
      group="companies"
    >
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar
            icon="fas fa-company"
            color="primary"
            text-color="white"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{company.name}}</q-item-label>
          <q-item-label caption></q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            dense
            flat
            round
            icon="fas fa-ellipsis-v"
            @click.stop
          >
            <q-menu>
              <CompaniesActionList :company="company"></CompaniesActionList>
            </q-menu>
          </q-btn>
        </q-item-section>
      </template>
      <q-card>
        <q-card-section>
          <CompanyForm
            :value="company"
            mode="edit"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
  import CompaniesActionList from './CompaniesActionList';
  import CompanyForm from './CompanyForm';

  export default {
    name: 'CompaniesList',
    components: { CompaniesActionList, CompanyForm },
    data () {
      return {}
    },
    props: {
      companies: {
        type: Array,
        required: true
      }
    }
  }
</script>
