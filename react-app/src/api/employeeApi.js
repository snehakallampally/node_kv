import apiWithTag from "./employeeBaseApi";


export const employeeApi=apiWithTag.injectEndpoints({
  endpoints:(builder)=>({
    getEmployeeList:builder.query({
      query:()=>"/employees",
    }),
    addEmployee:builder.mutation({
      query:(body)=>({
        url:"/employees",
         method:"POST",
        body      }),
        providesTags:["EMPLOYEE LIST"]
    }),
    getEmployeesDetails:builder.query({
      query:(id)=>`/employees/${id}`
    }),
    deleteEmployee:builder.mutation({
      query:(id)=>({
        url:`/employees/${id}`,
        method:"DELETE",

      }),
      invalidatesTags:["EMPLOYEE LIST"]
    }),
    getDepartmentByName:builder.query({
      query:()=>"/department"
    })
  })
})

export const{
useGetEmployeeListQuery,useAddEmployeeMutation,useGetEmployeesDetailsQuery,useDeleteEmployeeMutation,useGetDepartmentByNameQuery
}=employeeApi