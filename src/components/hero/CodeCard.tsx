
const CodeCard = () => {
  return (
    <div className="tech-card p-6 md:p-8 neon-border">
      <pre className="text-xs md:text-sm font-mono text-muted-foreground overflow-x-auto">
        <code>
          <span className="text-purple-500">const</span> <span className="text-yellow-500">developer</span> = {`{`}<br/>
          &nbsp;&nbsp;name: <span className="text-green-500">'Sulthan Taqi Rabbani'</span>,<br/>
          &nbsp;&nbsp;title: <span className="text-green-500">'Full Stack Developer'</span>,<br/>
          &nbsp;&nbsp;skills: [<span className="text-green-500">'React'</span>, <span className="text-green-500">'Node.js'</span>, <span className="text-green-500">'TypeScript'</span>, ...],<br/>
          &nbsp;&nbsp;passion: <span className="text-green-500">'Building elegant solutions'</span>,<br/>
          <br/>
          &nbsp;&nbsp;<span className="text-purple-500">function</span> <span className="text-blue-500">createAmazingApps</span>() {`{`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">return</span> <span className="text-green-500">'Innovative digital experiences'</span>;<br/>
          &nbsp;&nbsp;{`}`}<br/>
          {`}`};<br/>
        </code>
      </pre>
      
      <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="text-xs text-muted-foreground">sulthan.dev</div>
      </div>
    </div>
  );
};

export default CodeCard;
