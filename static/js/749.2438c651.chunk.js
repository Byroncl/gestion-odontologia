"use strict";(self.webpackChunkgestion_odontologia=self.webpackChunkgestion_odontologia||[]).push([[749],{4749:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var o=a(5043),n=a(6435),s=(a(9407),a(6175)),c=a(3101),i=a(3216),r=a(579);const d=()=>{const t=(0,i.Zp)(),[e,a]=(0,o.useState)([]),[d,l]=(0,o.useState)([]),[m,u]=(0,o.useState)([]),[g,p]=(0,o.useState)([]),[f,h]=(0,o.useState)([]);(0,o.useEffect)((()=>{const t=localStorage.getItem("appointments");t&&a(JSON.parse(t));const e=localStorage.getItem("users");e&&l(JSON.parse(e));const o=localStorage.getItem("clinicalHistories");o&&u(JSON.parse(o));const n=localStorage.getItem("payments");n&&p(JSON.parse(n));const s=localStorage.getItem("clinicalData");s&&h(JSON.parse(s))}),[]);const x=t=>{t.text("Informe de Citas",10,10);const a=e.map((t=>[t.date,t.time,t.patient,t.dentist]));t.autoTable({startY:20,head:[["Fecha","Hora","Paciente","Odont\xf3logo"]],body:a}),t.addPage()},S=t=>{t.text("Informe de Usuarios",10,10);const e=d.map((t=>[t.username,t.role]));t.autoTable({startY:20,head:[["Usuario","Rol"]],body:e}),t.addPage()},b=t=>{t.text("Informe de Historiales Cl\xednicos",10,10),m.forEach(((e,a)=>{t.text("Historial Cl\xednico ".concat(a+1),10,20),t.text("Paciente: ".concat(e.patientName),10,30),t.text("Tratamientos:",10,40),e.treatments.forEach(((e,a)=>{t.text("".concat(a+1,". ").concat(e),15,50+10*a)})),t.text("Diagn\xf3sticos:",10,80),e.diagnoses.forEach(((e,a)=>{t.text("".concat(a+1,". ").concat(e),15,90+10*a)})),t.text("Medicamentos:",10,120),e.medications.forEach(((e,a)=>{t.text("".concat(a+1,". ").concat(e),15,130+10*a)})),t.addPage()}))},I=t=>{t.text("Informe de Pagos",10,10);const e=g.map((t=>[t.date,t.description,t.amount.toString(),t.name,t.cedula]));t.autoTable({startY:20,head:[["N\xfamero de Factura","Tratamiento","Cantidad","cliente","cedula"]],body:e}),t.addPage()},N=t=>{t.text("Informe de Actividad de Odont\xf3logos",10,10);const e=f.map((t=>[t.date,t.diagnosis.toString(),t.treatment.toString(),t.name,t.cedula]));t.autoTable({startY:20,head:[["fecha","diagnosis","Tratamientos","nombre","cedula"]],body:e})};return(0,r.jsxs)("div",{className:"reports-container",children:[(0,r.jsx)("button",{className:"back-button",id:"back-button",onClick:()=>t("/administracion"),children:(0,r.jsx)(s.g,{icon:c.CeG})}),(0,r.jsx)("h2",{children:"Informes y Estad\xedsticas"}),(0,r.jsx)("div",{className:"report-form",children:(0,r.jsx)("button",{onClick:()=>{const t=new n.default;x(t),S(t),b(t),I(t),N(t),t.save("clinic_reports.pdf")},children:"Generar Informes en PDF"})})]})}}}]);
//# sourceMappingURL=749.2438c651.chunk.js.map