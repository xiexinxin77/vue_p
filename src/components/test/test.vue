<template>
  <div class="serviceBox">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="接口号">
        <el-input v-model="formData.serviceCode" placeholder="serviceCode"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click='submit'>提交</el-button>
          <el-button type="primary" @click='clear'>清空</el-button>
      </el-form-item>
      <el-form-item label="接口入参">
       <el-input type="textarea" :rows="3" placeholder=""></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>