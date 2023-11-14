figma.codegen.on('generate', () => {
  return [
    {
      language: 'HTML',
      code: `
        <div class="container">
          <div class="box"></div>
        </div>
      `,
      title: 'HTML',
    },
    {
      language: 'CSS',
      code: `
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .box {
          width: 100px;
          height: 100px;
          background-color: #000;
        }
      `,
      title: 'CSS',
    },
  ];
});
