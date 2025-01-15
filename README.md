
# **React Excel Data Viewer**

A React-based application to visualize and interact with Excel data using data tables, charts, and gauges. This project provides an intuitive UI for displaying data, generating graphs, and analyzing call scores.

## **Features**
- View Excel data in a responsive data table.
- Display bar graphs for call scores and overall performance.
- Show gauge charts for interest levels of each call.
- Responsive and visually appealing design using Tailwind CSS..

---

## **Getting Started**


### **Installation**

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Excel-Data-Viewer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install additional required packages:
   ```bash
   npm install xlsx react-table react-chartjs-2 chart.js moment
   ```

---

## **Usage**

### **Run the Application**
Start the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The app will reload automatically when you make changes.

---

## **Scripts**

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production in the `build` folder, optimized for performance.

---


## **View the project form here**
Open: [viewer-excel](https://viewer-excel.netlify.app/) get an amazing experience.


## **Dependencies**
The project uses the following key dependencies:
- [xlsx](https://www.npmjs.com/package/xlsx): For reading and parsing Excel files.
- [react-table](https://react-table.tanstack.com/): For rendering dynamic and interactive tables.
- [react-chartjs-2](https://react-chartjs-2.js.org/): For creating beautiful charts.
- [chart.js](https://www.chartjs.org/): For powering the charts.
- [moment](https://momentjs.com/): For date and time manipulation.

---

## **Folder Structure**
- `/src`: Contains all the application components.
  - `/components`: Contains reusable components such as `LocalExcelReader`, `DataTable`, `DataGraphCallScore`, `DataGraphOverScore`, and `InterestLevelGauge`.
  - `/App.js`: Main app logic.

---

## **Tailwind CSS**
The project uses Tailwind CSS for styling. Ensure that the configuration is initialized correctly:
```bash
npx tailwindcss init
```
Tailwind configuration is set to include custom themes, shadows, and responsive designs.

---

## **Acknowledgements**
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)

---

## **Author**
**Harish Nagure**  
[GitHub](https://github.com/harish-nagure)  
