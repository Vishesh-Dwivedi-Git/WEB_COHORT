const { Command } = require('commander');
const fs=require('fs');
const program = new Command();

program
  .name('counter')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count')
  .description('count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file)=>{
    fs.readFile(file,'utf8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            const lines=data.split('\n').length;
            console.log(`These are the lines-${lines}`);
        }
    })
  });

program.parse();
//node <your-file-name>.js count <file-path>